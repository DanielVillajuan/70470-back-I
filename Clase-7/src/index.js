import express from 'express'

const app = express()


// endpoints

app.get('/saludo',(req, res)=>{

    res.json({ mensaje: "Buenas noches"})
})

// params
app.get('/alumnos/:id',(req, res) => {
    console.log(req.params)
    res.send(` Buenas noches ${req.params.id} como estas?`)
})

app.get('/alumnos/:id/:nombre',(req, res) => {
    const { nombre, id } = req.params
    console.log(req.params)
    res.send(` Buenas noches ${nombre} tenes el id ${id} como estas?`)
})

app.get('/productos/:id/detalle',(req, res) => {
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

// query / query params

//    url.como/algo?key=video&limit=20

const listaProductos = [] // 50 productos

app.get('/productos/',(req, res) => {
    const query = req.query
    console.log(query)
    
    if(query.limit || query.categoria){
        const filtrado = query.categoria ? listaProductos.filter(product => product.categoria === query.categoria) : listaProductos
        return res.send({mensaje:'Solicitud exitosa con limit', resultado:filtrado.slice(query.limit) })
    }

    res.send({mensaje:'Solicitud exitosa', resultado: listaProductos })

})

app.listen(8080, ()=>{
    console.log('Servidor ON en puerto 8080')
})
