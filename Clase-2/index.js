// import getNames from './app.js'
console.log("Clase - 2")

// ECMA SCRIPT

// group

// **

// const resultado = 10 ** 2

const nombres = ['Daniel','Pedro', 'Lucas', 'Ciro']

// console.log(nombres.includes("Pedro"))

function getCharacters(){
    fetch("https://rickandmortyapi.com/api")
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(()=>{

    })
    console.log("Hola")
}

// getCharacters()


// const resultado = Object.entries(persona) // [["nombre","Daniel"],["apellido", "Weimann"]]

// console.log(resultado)

const persona = { 
    nombre: "Daniel",
    apellido: "Weimann",
    edad: 20,
    dni: 38000001,
    domicilio: {
        descripcion: "Av siempre viva",
        numero: 999 
    },
    estadoCivil: "Soltero"
}

const alumno = {
    ...persona, // todo lo que tenga persona lo pasara a alumno
    nombre: "Pedro",
    curso: ["Javascript", "Reactjs","Nextjs"],
    inicioActividad: "18/04/2022",
}

const { nombre, ...restAlumno } = alumno

// console.log(nombre)
// console.log(restAlumno)

// REST , SPREAD Operator


// function range(tipo, ...numeros){
//     console.log(tipo)
//     console.log(numeros)
// }



// range("suma",3,5,5,10,20,100)


// VOLVEMOS y 25

// export and import

// async function calculate(){
//    const { getNames, default: getDNI } = await import('./app.js')
//    getNames()
//    getDNI()
// }


// function traerAlumnos(alumno) {
//     const dni = alumno.dni ?? 27000000

//     if(dni > 38000000){
//         console.log('usted tiene aprox 29 años')
//     }

// }

// traerAlumnos(alumno)

class Civil {
    #nombre = ''
    constructor(){

    }

    getNombre(){
        return this.#nombre
    }
    #setNombre(nombre){
        this.#nombre = nombre
    }
} 

const persona1 = new Civil()

