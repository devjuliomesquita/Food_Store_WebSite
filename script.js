//DECLARAÇÃO DA VARIÁVEL ONDE FAZER O SLIDE DE PESQUISA E CARRINHO
let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');

//TRAZER OS ITENS PARA FRENTE
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
};

document.querySelector('#shopping-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
};