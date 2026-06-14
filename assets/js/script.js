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

// Selecionar botão de adicionar ao carrinho dos produtos
const addButton = document.querySelectorAll('.add-btn')

// Evento que adiciona elemento dinamico no carrinho
addButton.forEach((botao)=>{
    botao.addEventListener("click", ()=>{

        // Configurando o elemento pai
        const li = document.createElement('li')
        li.classList.add('cart-item')
        li.setAttribute('data-id', '1')

        // Configurando os spans de preço e nome
        const spanNome = document.createElement('span')
        spanNome.classList.add('cart-item-name')
        spanNome.innerHTML = botao.parentElement.dataset.name



        // Configurando os botões de controle do carrinho, incremento / decremento
        const cartControls = document.createElement('div')
        cartControls.classList.add('cart-item-controls')

        // botão de decremento
        const button_Decrease = document.createElement('button')
        button_Decrease.classList.add('qty-btn')
        button_Decrease.setAttribute('data-action', 'decrease')
        button_Decrease.setAttribute('data-id', '1')
        button_Decrease.innerText = '-'
        cartControls.appendChild(button_Decrease);

        // Span que mostra quantidade de itens
        const spanQty = document.createElement('span')
        spanQty.classList.add('cart-item-qty')
        spanQty.innerText = '1'
        cartControls.appendChild(spanQty);
        
        // botão de incremento
        const button_Increase = document.createElement('button')
        button_Increase.classList.add('qty-btn')
        button_Increase.setAttribute('data-action', 'increase')
        button_Increase.setAttribute('data-id', '1')
        button_Increase.innerText = '+'
        cartControls.appendChild(button_Increase);

        // Indicador de preço
        const spanPrice = document.createElement('span')
        spanPrice.classList.add('cart-item-price')
        spanPrice.innerText = botao.parentElement.dataset.price

        // Botão de remover item do carrinho 
        const removeButton = document.createElement('button')
        removeButton.classList.add('remove-btn')
        removeButton.innerText = '🗑'
        removeButton.setAttribute('data-id', '1')

        // Elemento pai do carrinho
        const cartList = document.getElementById('cart-list')

        cartList.appendChild(li);
        li.appendChild(spanNome);
        li.appendChild(cartControls);
        li.appendChild(spanPrice);
        li.appendChild(removeButton);
        


        const removeBtn = document.querySelector('.remove-btn')
        removeBtn.addEventListener('click', ()=>{
            removeBtn.parentElement.remove(removeBtn)
        })
    })
})
