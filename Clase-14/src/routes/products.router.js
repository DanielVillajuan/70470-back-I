import { Router } from "express";
import { ProductModel } from "../models/products.model.js";

const route = Router()

route.post('/', async(req, res) => {
    try{
        const body = req.body
        
        if(!body.stock) return res.status(400).json({mensaje: 'Algunos campos requeridos no se pasaron'})

        const respuesta = await ProductModel.create(body)
    
        return res.json({mensaje: 'Se guardo el producto', payload: respuesta })
    } catch (e){
        return res.status(500).json({mensaje: 'Error al guardar el producto!'})
    }
})

route.get('/', async (req, res) => {
    // empiezo a utilizar mi modelo, Producto

    const respuesta = await ProductModel.find({})

    res.json({ mensaje: 'Peticion get llamado correctamente!', payload: respuesta })
})

route.get('/:id', async (req, res) => {
    // empiezo a utilizar mi modelo, Producto
    const { id } = req.params
    const respuesta = await ProductModel.findById(id)

    res.json({ mensaje: 'Peticion get llamado correctamente!', payload: respuesta })
})

export default route
