import http from 'http'

const server = http.createServer((req, res)=>{
    res.end('Mi primer hola con http')
})


server.listen(8080, ()=>{
    console.log('Servidor on 8080')
})
