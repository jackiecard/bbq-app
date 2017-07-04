import mongoose from "mongoose";

let Schema = mongoose.Schema;

let UserModelSchema = new Schema({
    email: String,
    password: String
});

let UserModel = mongoose.model('UserModel', UserModelSchema);
