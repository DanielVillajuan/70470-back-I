import express from "express";
import ProductRouter from './routes/products.router.js'
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const stringConection = process.env.MONGO_KEY // lo reconoce gracias a dotenv
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/product', ProductRouter)

mongoose
    .connect(stringConection, { dbName: 'Almacen' })
    .then(() => console.log('Conectado a la base de datos!'))
app.listen(8080, () => console.log("server ok puerto 8080"));
