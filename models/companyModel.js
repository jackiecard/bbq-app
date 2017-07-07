import mongoose from "mongoose";

let Schema = mongoose.Schema;

let companyModelSchema = new Schema({
    cnpj: { type: String, unique: true, required: true },
    name:  { type: String, required: true },
    // list of purchases
});

let companyModel = mongoose.model('companyModel', companyModelSchema);

export default companyModel;
