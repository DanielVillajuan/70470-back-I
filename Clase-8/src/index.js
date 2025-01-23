import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true})) // hace una magia si recibe de form -> json

// endpoints




// params
app.get('/alumnos/',(req, res) => {
   
    res.send(`Se envian todos los alumnos`)
})
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

// const listaProductos = [] // 50 productos

// app.get('/productos/',(req, res) => {
//     const query = req.query
//     console.log(query)
    
//     if(query.limit || query.categoria){
//         const filtrado = query.categoria ? listaProductos.filter(product => product.categoria === query.categoria) : listaProductos
//         return res.send({mensaje:'Solicitud exitosa con limit', resultado:filtrado.slice(query.limit) })
//     }

//     res.send({mensaje:'Solicitud exitosa', resultado: listaProductos })

// })

app.post('/alumnos',(req, res) => {
    const alumno = req.body

    if(!alumno.nombre || !alumno.edad || !alumno.Soltero || !alumno.domicilio){
        return res.status(404).json({ mensaje: 'Te falto un dato bro'})
    }

    console.log('El domicilio es', alumno.domicilio)
    // logica necesaria para almacenar lo que recibe por body, en nuestro almacenamiento
    res.status(201).json({ mensaje: 'alumno guardado correctamente' })
})

app.put('/alumnos/:id',(req, res) => {
    const alumnoActualizado = req.body
    const id = req.params.id
    if(!id){
        return res.status(404).json({mensaje: 'no pasaste el id'})
    }
    console.log('El domicilio es', alumno.domicilio)
    const alumnoEncontrado = bbdd.find(alumno => alumno.id === id)
    if(!alumnoEncontrado){
        return res.status(404).json({mensaje: 'alumno no encontrado'})
    }
    const alumno = {
        ...alumnoEncontrado,
        ...alumnoActualizado
    }
    // pisar bbdd con el alumno encontrado
    // logica necesaria para almacenar lo que recibe por body, en nuestro almacenamiento
    res.json({ mensaje: 'body recibido' })
})

app.delete('/alumnos',(req, res)=>{
    // elimino a todos los alumnos
    res.status(200).json({mensaje: 'Se eliminaron todos los usuarios'})
})

app.delete('/alumnos/:id',(req, res)=>{
    const id = req.params.id
    // busco al usuario por id y elimino

    res.status(200).json({mensaje: 'Se elimino un alumno'})
})


app.listen(8080, ()=>{
    console.log('Servidor ON en puerto 8080')
})
