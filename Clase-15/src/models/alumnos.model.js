import { model, Schema } from "mongoose";

const alumnoCollections = 'alumnos';

const alumnoSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    dni: {
        type: String,
        require: true,
        unique: true
    },
    direccion: String,
    materias: {
        type: Array,
        default: []
    }
})

export const AlumnoModel = model(alumnoCollections, alumnoSchema)
