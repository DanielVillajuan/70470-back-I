import { Router } from "express";
import { prodManager } from "../managers/product.manager.js";

const route = Router()

route.get('/perfil/:idPerfil', (req, res) => {
    const user = {
        nombre: 'Daniel',
        apellido: 'Villajuan',
        edad: 29,
        avatar:'http://imagen.com/sarasa'
    }
    res.render('profile',{ user })
})

route.get('/condicional', (req, res) => {
    const users = [
        {nombre: 'Daniel'},
        {nombre: 'Pedro'},
        {nombre:'Sebastian'}
    ]

    res.render('condicional',{ isAdmin: true, users })
})

route.get('/productos', async (req, res) => {
    const productos = await prodManager.getAll()
    res.render('productos',{ productos })
})

export default route
