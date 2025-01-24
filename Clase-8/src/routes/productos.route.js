import { Router } from "express"
import { upload } from "../utils.js"

const route = Router()

route.get('/', (req, res) => {
    const { limit } = req.query

    const listaProducots = [];

    res.json({ resultados})
})

route.get('/:pid', (req, res) => {
    const { pid } = req.params

    const listaProducots = [];

    // busqueda por el pid en la lista de productos

    res.json({ resultados})
})

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

route.post('/', upload.single('avatar') , (req, res) => {
    const producto = req.body
    console.log(req.file)
    console.log(producto)

    res.json({ mensaje: 'Se creo el producto correctamente'})
})

route.put('/:pid', upload.single('avatar') , (req, res) => {
    const producto = req.body
    const {pid} = req.params
    // buscar el producto por el pid
    // remplazar los campos de dicho producto con los recibidos por body
    // guardar el producto actualizado

    res.json({ mensaje: 'Se creo el producto correctamente'})
})

route.delete('/:pid', upload.single('avatar') , (req, res) => {
    const {pid} = req.params
    // buscar el producto por el pid
    // lo elimino
    // actualizo la lista de productos

    res.json({ mensaje: 'Se creo el producto correctamente'})
})

export default route
