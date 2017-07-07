import mongoose from "mongoose";

let Schema = mongoose.Schema;

let itemPurchaseModelSchema = new Schema({
    name: { type: String, required: true },
    quantity:  { type: String, required: true },
});

let itemPurchaseModel = mongoose.model('itemPurchaseModel', itemPurchaseModelSchema);

export default itemPurchaseModel;
