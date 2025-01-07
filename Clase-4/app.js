// COMMON JS
// const { saludo } = require('./index.js')
// module.exports = {}

// ES MODULE
// import { saludo } from './index.js'
// export const saludo = () => {}

// MOMENTjs

// Debe contar con una variable que almacene la fecha actual (utilizar moment())
// Debe contar con una variable que almacene sólo la fecha de tu nacimiento
// Validar con un if que la variable contenga una fecha válida
// Finalmente, mostrar por consola cuántos días han pasado desde que naciste hasta el día de hoy. 
// (utilizar el método diff()

import moment from 'moment'

const today = moment()
const cumple = moment([2000,5,6])

console.log(cumple.isValid())

const diff = today.diff(cumple,'years')
console.log({diff})
