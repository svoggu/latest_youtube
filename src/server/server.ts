import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import { PostModel } from "./schemas/post.schema.js";
import { UserModel } from "./schemas/user.schema.js";
import mongoose from "mongoose";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import path from "path";
import crypto from "crypto";
import dotenv from "dotenv";
import { authHandler } from "./middleware/auth.middleware.js";
import { Gallery } from "../shared/models/gallery.model.js";
import { Server } from "socket.io";
import { createServer } from "http";
import { TweetModel } from "./schemas/profile.schema.js";
import { GridFSBucket } from "mongodb";

dotenv.config();
const access_secret = process.env.ACCESS_TOKEN_SECRET as string;
console.log(access_secret);

const saltRounds = 10;

const app = express();

const PORT = 3000;

const __dirname = path.resolve();
const clientPath = path.join(__dirname, '/dist/client');
app.use(express.static(clientPath));
console.log(clientPath);

let gfs: GridFSBucket;

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4204", "http://localhost:3000"],
  })
);

app.use(cookieParser());
app.use(express.json());

const mongoURI = "mongodb://localhost:27017/youtubedb";
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to DB Successfully");
    gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "uploads",
    });
  })
  .catch((err) => console.log("Failed to Connect to DB", err));

//Storage
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: file.originalname,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage: storage });
// app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.json({ message: "test" });
});

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.redirect("/");
 });

app.get("/api/files", (req, res) => {
  console.log("get files");
  gfs.find().toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "no files exist",
      });
    }
    return res.json(files);
  });
});

app.get("/api/image/:filename", (req, res) => {
  console.log("get image");
  console.log(req.params.filename);
  gfs
    .find({
      filename: req.params.filename,
    })
    .toArray((err, files) => {
      console.log(files);
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: "no files exist",
        });
      }
      gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    });
});

app.post("/api/files/del/:id", (req, res) => {
  gfs.delete(new mongoose.Types.ObjectId(req.params.id), (err, data) => {
    if (err) return res.status(404).json({ err: err.message });
    res.redirect("/");
  });
});

app.get("/api/tweets", function (req, res) {
  TweetModel.find()
    .then((data) => res.json({ data }))
    .catch((err) => {
      res.status(501);
      res.json({ errors: err });
    });
});

app.post("/api/create-tweet", authHandler, function (req: any, res) {
  const { text, img, _id, likes, disLikes } = req.body;
  const newTweet = new TweetModel({
    text,
    user: req.user._id,
    img,
  });
  console.log(newTweet, "*");
  newTweet
    .save()
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      console.log(err);
      res.status(403);
      res.json({ errors: err });
    });
});

app.get("/api/posts", function (req, res) {
  PostModel.find()
    .then((data) => res.json({ data }))
    .catch((err) => {
      res.status(501);
      res.json({ errors: err });
    });
});

app.post("/api/create-post", function (req, res) {
  const { message } = req.body;
  const post = new PostModel({
    message,
  });

  post
    .save()
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      res.status(501);
      res.json({ errors: err });
    });
});

app.get("/api/users", authHandler, function (req: any, res) {
  UserModel.find({}, "-password")
    .then((data) => res.json({ data }))
    .catch((err) => {
      res.status(501);
      res.json({ errors: err });
    });
});

app.post("/api/create-user", function (req, res) {
  const { firstname, email, lastname, password } = req.body;

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      const user = new UserModel({
        firstname,
        lastname,
        email,
        password: hash,
      });

      user
        .save()
        .then((data) => {
          res.json({ data });
        })
        .catch((err) => {
          res.status(501);
          res.json({ errors: err });
        });
    });
  });
});

app.delete("/api/delete-user/:id", function (req, res) {
  const _id = req.params.id;
  UserModel.findByIdAndDelete(_id).then((data) => {
    console.log(data);
    res.json({ data });
  });
});

app.put("/api/update-user/:id", function (req, res) {
  console.log("Update user");
  UserModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: { firstname: req.body.firstname, email: req.body.email },
    },
    {
      new: true,
    },
    function (err, updateUser) {
      if (err) {
        res.send("Error updating user");
      } else {
        res.json(updateUser);
      }
    }
  );
});

app.get("/api/logout", authHandler, function (req, res) {
  res.cookie("jwt", "", {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
  });
  res.json({ message: "Successfully Logged out" });
});

app.post("/api/login", function (req, res) {
  const { email, password } = req.body;

  UserModel.findOne({ email }).lean()
    .then((user) => {
      console.log(user);

      bcrypt.compare(password, `${user?.password}`, function (err, result) {
        if (result) {
          console.log("It matches!");
          const accessToken = jwt.sign({ user }, access_secret);
          res.cookie("jwt", accessToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
          });
          res.json({ message: "Successfully Logged In" , data: user});
        } else {
          res.sendStatus(403);
        }
      });
    })
    .catch((err) => {
      return res.sendStatus(404);
    });
});

app.get("/api/check-login", authHandler, (req, res) => {
  res.json({ message: "yes" })
});

const server = createServer(app);
let io = new Server(server, {
  cors: { origin: ["http://localhost:4204"] },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("user tweet", "here is my tweet");
});

app.listen(PORT, function () {
  console.log(`starting at localhost http://localhost:${PORT}`);
});
