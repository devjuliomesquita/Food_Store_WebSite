//DECLARAÇÃO DA VARIÁVEL ONDE FAZER O SLIDE DE PESQUISA DO NAVBAR
let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navBar = document.querySelector('.navbar');

//TRAZER OS ITENS PARA FRENTE
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
};

document.querySelector('#shopping-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
};

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
};

document.querySelector('#menu-btn').onclick = () => {
    navBar.classList.toggle('active');
};

//RETIRAR OS ITENS COM O SCROLL
window.onscroll = () => {
    navBar.classList.remove('active');
}