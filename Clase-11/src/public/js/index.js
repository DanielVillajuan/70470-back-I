const socket = io()

const user = {
    username: ''
}

const chatbox = document.querySelector('#send-chat')
const buttonChatBox = document.querySelector('#send-button-chat')
const contenedorChat = document.querySelector('#contenedor-chat')

Swal.fire({
    input:'text',
    title: 'Logueate',
    text: 'Necesitas un nombre para identificarte en el chat!',
    allowOutsideClick: false,
    inputValidator: (value) => {
        // validacion de caracteres.
        if(!value) return 'Por favor ingrese un nick!'
    }
}).then((response) => {
    user.username = response.value
    socket.emit('nueva-conexion',user.username)
})

chatbox.addEventListener('keyup', (event) => {
    const { value } = event.target
    if(event.key === 'Enter'){
        // envio el mensaje
        socket.emit('mensaje',{ username: user.username, mensaje: value })
        console.log(value)
        event.target.value = ''
    }
})

buttonChatBox.addEventListener('click',() => {
    if(chatbox.value){
        socket.emit('mensaje',{ username: user.username, mensaje: chatbox.value })
        console.log(chatbox.value)
        chatbox.value = ''
    }
})

socket.on('logs', (data) => {
    console.log(data)
    contenedorChat.innerHTML = ''
    data.forEach(chat => {
        const div = document.createElement('div')
        div.innerHTML =`
            <p>${chat.username}:</p> <span><b>${chat.mensaje}</b></span>
            <hr>
        `
        contenedorChat.appendChild(div)
    })
})

socket.on('nueva-conexion', (userConectado) => {
    Toastify({
        text: `${userConectado} se ha conectado`,
        duration: 5000,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
})
