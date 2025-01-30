console.log('Soy el archivo condicional.js')

const isUser = localStorage.getItem('isUser') || false



if(!isUser){
    const inputValue = ''
    Swal.fire({
        title: "Parece que no estas cargado",
        input: "text",
        inputLabel: "Inserte el nombre",
        inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "Por favor ingrese un valor";
          }
        }
      }).then(value => {
          localStorage.setItem('isUser', true)
    });
}else {
    fetch('http://localhost:8080/api/products')
        .then(data => {return data.json()})
        .then(respuesta =>{
            const contenedor = document.querySelector('#productos-contenedor')
            respuesta.forEach(producto => {
                const div = document.createElement('div')
                div.innerHTML = `
                    <p>${producto.title}</p>
                    <h4>${producto.price}</h4>
                    <hr>
                `
                contenedor.appendChild(div)
            })
            console.log(respuesta)
        })
}
