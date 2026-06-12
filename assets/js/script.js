// Selecionar botões de abrir e fechar o carrinho
const cartBtn = document.getElementById('cart-btn')
const cartSidebar = document.getElementById('cart-sidebar')
const closeCart = document.getElementById('close-cart')

// Selecionar nav e botão do menu hamburguer
const menuBtn = document.getElementById('menu-btn')
const nav = document.getElementById('nav')

// Evento de click para abrir carrinho
cartBtn.addEventListener('click', () =>{
    cartSidebar.classList.toggle('open')
})

// evento de click para fechar carrinho
closeCart.addEventListener('click', () =>{
    cartSidebar.classList.remove('open')
})

// evento para abrir menu hamburguer
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open')
})


