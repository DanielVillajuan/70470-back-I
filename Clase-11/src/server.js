import express from "express";
import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js";
import vistaRouter from "./routes/vistas.router.js"
import handlebars from 'express-handlebars';
import path from 'path';
import { Server } from 'socket.io';

const app = express();

const serverHttp = app.listen(8080, () => console.log("server ok puerto 8080"));
const webSocketServer = new Server(serverHttp);

app.engine('handlebars', handlebars.engine())
app.set('views', path.join(process.cwd(), "src", "views")) // ___dirname + '/views'
app.set('view engine', 'handlebars')
app.use(express.static(path.join(process.cwd(), "src", "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use('/', vistaRouter)

webSocketServer.on('connection', (socket) => {
    console.log('Nuevo dispositivo conectado!, se conecto ->', socket.id)
    socket.on('mensaje', (data)=>{
        console.log('El cliente, con id ->', socket.id, 'Envia dicha data = ',data)
        socket.emit('mensaje',{mensaje: 'Buenas cliente te devuelvo el saludo'})
    })

    socket.on('mensaje-a-los-demas',(data) => {
        socket.broadcast.emit('saludos-a-todos', data)
    })

    webSocketServer.emit('bienvenida','Bienvenidos a todos los clientes!')
})


