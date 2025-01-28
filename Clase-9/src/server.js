import express from "express";
import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js";
import vistaRouter from "./routes/vistas.router.js"
import handlebars from 'express-handlebars';
import path from 'path';

const app = express();

app.engine('handlebars', handlebars.engine())
app.set('views', path.join(process.cwd(), "src", "views")) // ___dirname + '/views'
app.set('view engine', 'handlebars')
app.use(express.static(path.join(process.cwd(), "src", "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use('/', vistaRouter)


app.listen(8080, () => console.log("server ok puerto 8080"));


