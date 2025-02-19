import { Router } from "express";
import { MateriasModel } from "../models/materias.model.js";
import { MateriasDao } from "../models/dao/materias.dao.js";

const route = Router()
const MateriasService = new MateriasDao(MateriasModel)

route.get('/', async (req, res) => {
    const result = await MateriasService.getAll()
    if(!result) return res.status(500).json({ mensaje: 'Error en la consulta a la BBDD'})
    
    res.status(200).json({mensaje: 'get alumnos', payload: result})
})

route.get('/:id', async (req, res) => {
    const { id } = req.params
    const result = await MateriasService.getById(id)

    if(!result) return res.status(500).json({ mensaje: 'Error en la consulta a la BBDD'})

    res.status(200).json({mensaje: 'get by id', payload: result})
})

route.post('/', async (req, res) => {
    const { descripcion, profesor = '', horarios = '', cupo, comision } = req.body
    const result = await MateriasService.create({
        descripcion,
        profesor,
        horarios,
        cupo,
        comision
    })

    if(!result) return res.status(500).json({ mensaje: 'Error en la consulta a la BBDD'})

    res.status(201).json({mensaje: 'se creo la materia', payload: result})

})

route.put('/:id', async (req, res) => {
    const newMateria = req.body
    const { id } = req.params

    const result = await MateriasService.update(id, newMateria)

    if(!result) return res.status(500).json({ mensaje: 'Error en la consulta a la BBDD'})

    res.status(200).json({mensaje: 'se actualizo una materia', payload: result})
})

route.delete('/:id', async (req, res) => {
    const { id } = req.params
    const result = await MateriasService.delete(id)
    if(!result) return res.status(500).json({ mensaje: 'Error en la consulta a la BBDD'})
    res.status(200).json({mensaje: 'se elimino una materia'})
})


export default route
