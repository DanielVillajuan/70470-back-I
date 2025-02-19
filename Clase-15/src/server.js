import express from 'express'
import handlebars from 'express-handlebars'
import path from 'node:path'
import ViewRoute from './routes/views.route.js'
import AlumnosRoute from './routes/alumnos.route.js'
import MateriasRoute from './routes/materias.route.js'
import { connectToMongo } from './connections/mongo.js'

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', path.join(process.cwd(),'src','views'))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(process.cwd(),'src','public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/alumnos',AlumnosRoute)
app.use('/api/materias',MateriasRoute)
app.use('/', ViewRoute)

connectToMongo()

app.listen(8080, () => {
    console.log('Servidor ON')
})
