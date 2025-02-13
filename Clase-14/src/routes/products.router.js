import { Router } from "express";

const route = Router()

route.post('/', (req, res) => {

    res.send('Peticion post llamado correctamente!')
})

export default route
