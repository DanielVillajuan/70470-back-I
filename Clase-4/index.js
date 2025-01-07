// Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20.
// Indicar por consola la finalización de esta operación con un mensaje.
// crear un objeto cuyas claves sean los números salidos 
// y el valor asociado a cada clave será la cantidad de veces que salió dicho número. 
// Representar por consola los resultados.

let numeros = {}

for(let i=1; i <= 20; i++){
    
    // generar el numero random entre 1 a 20.
    const numeroRandom = Math.round(Math.random() * 20 + 1)
    numeros[numeroRandom] = numeros[numeroRandom] + 1 || 1

}
console.log(numeros)
console.log("Fin del proceso.")


