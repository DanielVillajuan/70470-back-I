import { Router } from "express"

const route = Router()

route.get('/:id/detalle',(req, res) => {
    const {  id } = req.params
    console.log(req.params)
    res.json({
        id,
        nombre: 'Arroz',
        descripcion: 'El mejor arroz barato y rico',
        precio: 800,
        descuento: false
    })
})

route.post('/', (req, res) => {
    const producto = req.body
    console.log(producto)

    res.json({ mensaje: 'Se creo el producto correctamente'})
})

export default route
