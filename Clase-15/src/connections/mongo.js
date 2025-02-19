import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

export const connectToMongo = async () => {
    try{
        mongoose.connect(process.env.MONGO_KEY,{dbName: 'Codermouse'})
            .then(() => console.log('Se conecto a la base de datos'))
    } catch (e) {
        console.log('Error al conectarse a la base de datos')
    }
} 
