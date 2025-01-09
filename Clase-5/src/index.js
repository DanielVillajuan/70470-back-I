import fs from 'node:fs'


// SYNC
// fs.writeFileSync('./test.txt','esto es escrito por fs')


// if(fs.existsSync('./test.txt')){
//    const file = fs.readFileSync('./test.txt','utf8')
//    console.log('readfile ->',file)
//    fs.appendFileSync('./test.txt', ' esto se agrego desde appendFile')
// }

// fs.unlinkSync('./test.txt')

// Callbacks

// fs.writeFile('./test2.txt','Esto fue creado por writeFile', (error)=> {
//     if(error){
//         console.log('Hubo un error a la hora de escribir/crear el archivo')
//     }else {
//         fs.readFile('./test2.txt','utf-8',(error, data)=>{
//             if(error){
//                 console.log('Error al leer el archivo')
//             }else {
//                 console.log('readFile ->', data)
//                 fs.appendFile('./test2.txt',' esto se agrego con appendfile',(error) => {
//                     if(error){
//                         console.log('Error al agregar mas contenido')
//                     }else {
//                         console.log('Se agrego el contenido con exito')
//                     }
//                 })
//             }
//         })
//     }
// })

// promesas

const accionesConArchivo = async (path) => {

    try{
        const data = { alumnos:[{nombre:'Fulano', nota: 7},{nombre:'Roberto', nota:5}, {nombre:'Juan', nota: 8}],curso:'Back I'}
        await fs.promises.writeFile(path, JSON.stringify(data))
        const result = await fs.promises.readFile(path,'utf-8')
        console.log(JSON.parse(result))
        // await fs.promises.appendFile(path,'Esto se agrego usando try, catch y promesas')
        // await fs.promises.unlink(path)
    }catch (err){
      console.log('Error ->', err)  
    }
}


accionesConArchivo('./test3.txt');
