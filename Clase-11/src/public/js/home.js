const socketClient = io()
const contenedor = document.querySelector('#contenedor')

document.querySelector('#emitir').addEventListener('click', () => {
    socketClient.emit('mensaje', { mensaje: 'Saludos desde el cliente'})
})

socketClient.on('mensaje', (data) => {
    const p = document.createElement('p')
    p.innerText = data.mensaje
    contenedor.appendChild(p)
    console.log('El servidor me respondio con -> ', data)
})


document.querySelector('#emitir-menos-a-mi').addEventListener('click', () => {
    socketClient.emit('mensaje-a-los-demas', { mensaje: 'Saludos a todos!!!!'})
})

socketClient.on('saludos-a-todos',(data)=>{
    console.log('Nos llego un saludo de alguien!,', data)
    const p = document.createElement('p')
    p.innerText = data.mensaje
    contenedor.appendChild(p)
    Toastify({
        text: "Mensaje de una pestaña compañera",
        duration: 10000,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast()
})

socketClient.on('bienvenida',(data) => {
    console.log('El servidor nos dice esto ->', data)
})
