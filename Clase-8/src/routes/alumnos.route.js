
import { Router } from "express";

const route = Router();

route.use((req, res, next) => {
    console.log(`${req.method} - ${req.url} -> ${new Date().toLocaleDateString()}`)
    next()
})

const setFecha = (req, res, next) => {
    req.fecha = new Date()
    next()
}

route.get('/', setFecha ,(req, res) => {
   console.log('req.fecha ->' ,req.fecha)
    res.send(`Se envian todos los alumnos`)
})

route.get('/:id',(req, res) => {
    console.log(req.params)
    res.send(` Buenas noches ${req.params.id} como estas?`)
})

route.get('/:id/:nombre',(req, res) => {
    const { nombre, id } = req.params
    console.log(req.params)
    res.send(` Buenas noches ${nombre} tenes el id ${id} como estas?`)
})

route.post('/',(req, res) => {
    const alumno = req.body

    if(!alumno.nombre || !alumno.edad || !alumno.Soltero || !alumno.domicilio){
        return res.status(404).json({ mensaje: 'Te falto un dato bro'})
    }

    console.log('El domicilio es', alumno.domicilio)
   
    res.status(201).json({ mensaje: 'alumno guardado correctamente' })
})

route.put('/:id',(req, res) => {
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
    res.json({ mensaje: 'body recibido' })
})

route.delete('/',(req, res)=>{
    res.status(200).json({mensaje: 'Se eliminaron todos los usuarios'})
})

route.delete('/:id',(req, res)=>{
    const id = req.params.id

    res.status(200).json({mensaje: 'Se elimino un alumno'})
})

export default route;
