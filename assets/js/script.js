// Selecionar botões de abrir e fechar o carrinho
const cartBtn = document.getElementById('cart-btn')
const cartSidebar = document.getElementById('cart-sidebar')
const closeCart = document.getElementById('close-cart')

// Selecionar nav e botão do menu hamburguer
const menuBtn = document.getElementById('menu-btn')
const nav = document.getElementById('nav')



// Evento de click para abrir carrinho
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.toggle('open')
})

// evento de click para fechar carrinho
closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('open')
})

// evento para abrir menu hamburguer
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open')
})

// Selecionar botão de adicionar ao carrinho dos produtos
const addButton = document.querySelectorAll('.add-btn')

// Array de objetos para puxar dados dos produtos
const produtos = [
    {
        id: 1,
        name: 'Fone Bluetooth',
        category: 'audio',
        price: 299.90,
        amount: 1,

    },
    {
        id: 2,
        name: 'Teclado Mecânico',
        category: 'tecnologia',
        price: 459.90,
        amount: 1,
    },
    {
        id: 3,
        name: 'Mouse Sem Fio',
        category: 'tecnologia',
        price: 189.90,
        amount: 1,
    },
    {
        id: 4,
        name: 'Webcam HD',
        category: 'tecnologia',
        price: 349.90,
        amount: 1,
    },
    {
        id: 5,
        name: 'Caixa de Som',
        category: 'audio',
        price: 399.90,
        amount: 1,
    },
    {
        id: 6,
        name: 'Mousepad XL',
        category: 'acessorios',
        price: 89.90,
        amount: 1,
    },
    {
        id: 7,
        name: 'Hub USB-C',
        category: 'acessorios',
        price: 159.90,
        amount: 1,
    },
    {
        id: 8,
        name: 'Suporte Notebook',
        category: 'acessorios',
        price: 129.90,
        amount: 1,
    },
]

// Este é o array do carrinho, ele vai ser util para verificações de produtos
let carrinho = []

// Função de renderizar os itens dinamicamente
function renderizarCarrinho(){
    cartList.innerHTML = ''
    carrinho.forEach((item) =>{
        // Configurando elemento LI 
        const li = document.createElement('li')
        li.classList.add('cart-item')
        li.setAttribute('data-id', item.id)
        li.setAttribute('data-price', item.price)
        
        // Configurando os spans de preço e nome
        const spanNome = document.createElement('span')
        spanNome.classList.add('cart-item-name')
        spanNome.innerText = item.name

        // Configurando os botões de controle do carrinho, incremento / decremento
        const cartControls = document.createElement('div')
        cartControls.classList.add('cart-item-controls')

        // botão de decremento
        const button_Decrease = document.createElement('button')
        button_Decrease.classList.add('qty-btn')
        button_Decrease.setAttribute('data-action', 'decrease')
        button_Decrease.setAttribute('data-id', item.id)
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
        button_Increase.setAttribute('data-id', item.id)
        button_Increase.innerText = '+'
        cartControls.appendChild(button_Increase);
        
        // Indicador de preço
        const spanPrice = document.createElement('span')
        spanPrice.classList.add('cart-item-price')
        spanPrice.innerText = `R$ ${item.price}`

        // Botão de remover item do carrinho 
        const removeButton = document.createElement('button')
        removeButton.classList.add('remove-btn')
        removeButton.innerText = '🗑'
        removeButton.setAttribute('data-id', item.id)

        // Elemento pai do carrinho
        const cartList = document.getElementById('cart-list')

        cartList.appendChild(li);
        li.appendChild(spanNome);
        li.appendChild(cartControls);
        li.appendChild(spanPrice);
        li.appendChild(removeButton);
    })
}

// Evento que adiciona elemento dinamico no carrinho
addButton.forEach((botao) => {
    botao.addEventListener("click", () => {

        // Procura o produto pelo ID do botão clicado
        const produtoEncontrado = produtos.find(item => item.id == botao.parentElement.dataset.id)

        // Verifica se existe o produto dentro do array carrinho
        const verificarExistencia = carrinho.some(item => item.id == botao.parentElement.dataset.id)

        // Se o produto não existir, adiciona no array carrinho, se existir aumenta a quantidade do item
        if(verificarExistencia == false){
            carrinho.push(produtoEncontrado)
            renderizarCarrinho()

        }else if(verificarExistencia == true){
            const produtoCarrinho = carrinho.find(item => item.id == botao.parentElement.dataset.id)
            produtoCarrinho.amount++
        }else{
            
        }

        checkCart()
        atualizarContador()
        atualizarTotal()
    })
})


// Configurando função do botão de remover itens do carrinho 
const cartList = document.getElementById('cart-list')

cartList.addEventListener('click', (botao) => {
    if (botao.target.classList.contains('remove-btn') === true) {
        carrinho = carrinho.filter(item => item.id !== Number(botao.target.dataset.id))
        botao.target.parentElement.remove(botao)

        console.log(carrinho)

        
        checkCart()
        atualizarContador()
        atualizarTotal()
    } else {
        
    }

})

// Mensagem de carrinho vazio: hidden / visible

const cartEmpty = document.getElementById('cart-empty')

function checkCart() {
    if (cartList.childElementCount > 0) {
        cartEmpty.classList.add('hidden')
    } else {
        cartEmpty.classList.remove('hidden')
    }
}

// Função que atualiza o contador do carrinho 
const cartCount = document.getElementById('cart-count')
function atualizarContador() {
    cartCount.textContent = cartList.childElementCount
}

// Função que calcula o total dos itens do carrinho e atualiza no rodapé do carrinho
const cartTotal = document.getElementById('cart-total')
const cartUl = document.querySelector('.cart-list')

function atualizarTotal() {
    let total = 0;

    for (let item of cartUl.children) {
        let valor = Number(item.dataset.price)
        total += valor
        cartTotal.innerText = `R$ ${total.toFixed(2)}`
    }

    if (cartUl.childElementCount === 0) {
        let valorZerado = 0;
        cartTotal.innerText = `R$ ${valorZerado}`
    } else {

    }
}