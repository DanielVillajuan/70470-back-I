import { model, Schema } from "mongoose"
import mongoosepaginatev2 from 'mongoose-paginate-v2'

const ordenCollections = 'orders'

const ordenSchema = new Schema({
    precio_unitario: Number,
    cantidad: Number,
    talle: {
        type: String,
        enum: ['s','m','l','xl'],
        default: 'm'
    },
    descripcion: String
})

ordenSchema.plugin(mongoosepaginatev2)

export const OrdenesModel = model(ordenCollections, ordenSchema)
