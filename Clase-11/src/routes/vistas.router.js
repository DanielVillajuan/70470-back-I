import { Router } from "express";

const route = Router()

route.get('/', (req, res) => {
    res.render('home',{})
})


export default route
