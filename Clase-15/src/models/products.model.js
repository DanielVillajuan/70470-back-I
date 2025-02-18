import { model, Schema } from "mongoose";

const productCollection = 'products'
const productSchema = new Schema({
    nombre: String,
    codigo: {
        type: String,
        unique: true
    },
    stock: { type: Number, require: true },
    tieneDescuento: Boolean,
})

export const ProductModel = model(productCollection, productSchema)

