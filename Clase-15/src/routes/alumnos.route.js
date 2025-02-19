import { Router } from "express";
import { AlumnoModel } from "../models/alumnos.model.js";
import { AlumnosDao } from "../models/dao/alumnos.dao.js";

const route = Router()

const AlumnosService = new AlumnosDao(AlumnoModel)

route.get('/', async (req, res) => {
    const result = await AlumnosService.getAll()
    res.status(200).json({mensaje: 'get alumnos', payload: result})
})

route.get('/:id', async (req, res) => {
    const { id } = req.params
    const result = await AlumnosService.getById(id)
    res.status(200).json({mensaje: 'get by id', payload: result})
})

route.post('/', async (req, res) => {
    const { nombre, apellido, email, dni, direccion } = req.body
    const result = await AlumnosService.create({
        nombre,
        apellido,
        direccion,
        email,
        dni
    })

    res.status(201).json({mensaje: 'se creo el alumno', payload: result})

})

route.put('/:id', async (req, res) => {
    const newAlumno = req.body
    const { id } = req.params
    const result = await AlumnosService.update(id, newAlumno)
    res.status(200).json({mensaje: 'se actualizo un alumno', payload: result})
})

route.delete('/:id', async (req, res) => {
    const { id } = req.params
    await AlumnosService.delete({ _id: id })
    res.status(200).json({mensaje: 'se elimino un alumno'})
})


export default route
