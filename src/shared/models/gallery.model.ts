import * as mongoose from 'mongoose';

export class Gallery {
    _id?:{type: mongoose.Types.ObjectId}
    imageUrl?: string;
    imageTitle?: string;
    imageDesc?: string;
    uploaded?: Date;
  }