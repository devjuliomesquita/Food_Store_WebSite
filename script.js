//DECLARAÇÃO DA VARIÁVEL ONDE FAZER O SLIDE DE PESQUISA DO NAVBAR
let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navBar = document.querySelector('.navbar');

//TRAZER OS ITENS PARA FRENTE
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
};

document.querySelector('#shopping-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
};

document.querySelector('#menu-btn').onclick = () => {
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
};

//RETIRAR OS ITENS COM O SCROLL
window.onscroll = () => {
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}

//CARROSSEL DOS PRODUTOS
var swiper = new Swiper(".produtos-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

//CARROSSEL DOS REVIEWS
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});