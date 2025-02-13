import express from "express";
import ProductRouter from './routes/products.router.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/product', ProductRouter)

app.listen(8080, () => console.log("server ok puerto 8080"));
