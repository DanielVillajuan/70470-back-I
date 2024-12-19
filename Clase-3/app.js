console.log("Clase - 3")

// Callbacks - es la funcion que recibe como parametro otra funcion

// const numeros = [ 2,3,4,5,6,7]

// callback para el map
// const esPar = (num) => {
//     return num % 2 === 0 ? 'es par': 'es impar'
// }

// const nuevoArray = numeros.map((num, index) => {
//     // console.log(index)
//      return num % 2 === 0 ? 'es par': 'es impar'
// })

// console.log(nuevoArray)


// const miMap = (array, callback) => {
//     const nuevoArray = []
//     for(let i=0;i<array.length; i++){
//         const resultado = callback(array[i], i)
//         nuevoArray.push(resultado)
//     }

//     return nuevoArray
// }

// const resultadoNuevoArray = miMap(numeros, (num, index) => {
//     // console.log(num)
//      return num % 2 === 0 ? 'es par': 'es impar'
// })

// console.log(resultadoNuevoArray)

Array.prototype.myMap = function(array, callback) {
    // this
    const nuevoArray = []
    for(let i=0;i<this.length; i++){
        const resultado = callback(this[i], i)
        nuevoArray.push(resultado)
    }

    return nuevoArray
}

const esPar = [10,20,30,40,55,77,33]

const nuevoArray = esPar.myMap([],(num) => {
    return num % 2 === 0 ? 'es par': 'es impar'
})

// console.log(nuevoArray)
// callback(error, resultado)
// error -> resultado === null
// !error -> resultado == {data: {}}

// modificarArchivo(nombreArchivo, (error, resultado) => {
//     if(err){
//         callbackError(err)
//     }else {
//         almacenarArchivo(nombreArchivo, 'utf-8', (error, resultado)=>{
//             if(error){
//                 callbackError(error)
//             }else {
//                 leoElArchivoAlmacenado((errorLectura, resultado) => {
//                     if(errorLectura){
//                         callbackError(errorLectura)
//                     }else {
//                         console.log(resultado)
//                     }
//                 })
//             }
//         })
//     }
// })

// modificarArchivo(nombreArchivo)
// .then(resultado => {
//     return almacenarArchivo(nombreArchivo, 'utf-8')
// })
// .then(resultado => {
//     return leoElArchivoAlmacenado()
// })
// .then(resultado => {
//     return console.log(resultado)
// })
// .catch(err => console.log(err))

const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if(divisor !== 0){
            resolve(dividendo/divisor)
        }else {
            reject('No se puede dividir por cero')
        }
    })
}

// dividir(5,10)
// .then(resultado => console.log(resultado))
// console.log("Inicio de proceso")
// dividir(5, 0)
// .catch(err => console.log(err))
// console.log("finalizacion del proceso")

const calcularDivision = async () => {

    try{
        const resultado = await dividir(5, 10)
        console.log(resultado)
    }catch (e){
        console.log(e)
    }
  
}

calcularDivision()
