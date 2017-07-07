import mongoose from "mongoose"
import ItemPurchaseModel from './itemPurchaseModel'
import UserModel from './userModel'

let Schema = mongoose.Schema

let purchaseModelSchema = new Schema({
    items: [{ type: Schema.Types.ObjectId, ref: ItemPurchaseModel }],
    userId:  { type: String, ref: UserModel },
})

let purchaseModel = mongoose.model('purchaseModel', purchaseModelSchema)

export default purchaseModel
