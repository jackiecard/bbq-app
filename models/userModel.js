import mongoose from "mongoose";

let Schema = mongoose.Schema;

let UserModelSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

let UserModel = mongoose.model('UserModel', UserModelSchema);

export default UserModel;
