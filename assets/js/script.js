const cartBtn = document.getElementById('cart-btn')
const cartSidebar = document.getElementById('cart-sidebar')
const closeCart = document.getElementById('close-cart')

cartBtn.addEventListener('click', () =>{
    cartSidebar.classList.toggle('open')
})

closeCart.addEventListener('click', () =>{
    cartSidebar.classList.remove('open')
})



