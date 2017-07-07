import mongoose from "mongoose"
import PurchaseModel from './purchaseModel'

let Schema = mongoose.Schema

let companyModelSchema = new Schema({
    cnpj: { type: String, unique: true, required: true },
    name:  { type: String, required: true },
    purchases: [{ type: Schema.Types.ObjectId, ref: PurchaseModel }],
})

let companyModel = mongoose.model('companyModel', companyModelSchema)

export default companyModel
