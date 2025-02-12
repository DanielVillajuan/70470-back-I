const socket = io()

const contenedorProductosRTP = document.querySelector('.products-container-rtp')

socket.on('realtime', (data)=>{
    contenedorProductosRTP.innerHTML = ''
    data.forEach(product => {
        console.log(product)
        const div = document.createElement('div')
        div.classList.add(`${product.id}`,'cart')

        const id = document.createElement('p')
        id.innerText = id.title
        const title = document.createElement('p')
        title.innerText = product.title
        const description = document.createElement('p')
        description.innerText = product.description
        const price = document.createElement('p')
        price.innerText = '$ ' + product.price
        const code = document.createElement('p')
        code.innerText = product.code
        const stock = document.createElement('p')
        stock.innerText = product.stock
        const category = document.createElement('p')
        category.innerText = product.category

        div.appendChild(id)
        div.appendChild(title)
        div.appendChild(description)
        div.appendChild(price)
        div.appendChild(code)
        div.appendChild(stock)
        div.appendChild(category)
        contenedorProductosRTP.appendChild(div)
    });
})

const addProduct = ()=>{
    
    const title = document.querySelector('#add-title').value
    const description = document.querySelector('#add-description').value
    const price = document.querySelector('#add-price').value
    const code = document.querySelector('#add-code').value
    const stock = document.querySelector('#add-stock').value
    const category = document.querySelector('#add-category').value

    const newProduct = {title,description,price,code,stock,category}
    socket.emit("nuevo-producto", newProduct)

    document.querySelector('#add-title').value = ""
    document.querySelector('#add-description').value = ""
    document.querySelector('#add-price').value = ""
    document.querySelector('#add-code').value = ""
    document.querySelector('#add-stock').value = ""
    document.querySelector('#add-category').value = ""
    
    
}
document.querySelector('#button-add').addEventListener('click', ()=> {
    addProduct()
})

document.querySelector('#button-update').addEventListener('click', () => {
    updateProduct()
})

const updateProduct = ()=>{
    const id = document.querySelector('#update-id').value
    const title = document.querySelector('#update-title').value
    const description = document.querySelector('#update-description').value
    const price = document.querySelector('#update-price').value
    const code = document.querySelector('#update-code').value
    const stock = document.querySelector('#update-stock').value
    const category = document.querySelector('#update-category').value

    const newProduct = {id, title,description,price,code,stock,category}
    socket.emit("update-producto", newProduct)
    
    document.querySelector('#update-id').value = ""
    document.querySelector('#update-title').value = ""
    document.querySelector('#update-description').value = ""
    document.querySelector('#update-price').value = ""
    document.querySelector('#update-code').value = ""
    document.querySelector('#update-stock').value = ""
    document.querySelector('#update-category').value = ""
    
}

document.querySelector('#button-delete').addEventListener('click', () => {
    const id = document.querySelector('#delete-id').value
    deleteProduct(id)
})
const deleteProduct = (id)=>{
    socket.emit('delete-product', id)
}
