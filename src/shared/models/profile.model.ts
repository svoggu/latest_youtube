// import * as mongoose from 'mongoose';
// export interface Profile {
//     _id: string;
//     name: string;
//     imagePath: string;
//   }

import { User } from "./user.model.js";

export interface Tweet{
    _id?: number;
    user?: string | User,
    text: string,
    img?: string,
    points?: number,
    likes?: number,
    disLikes?: number,
}