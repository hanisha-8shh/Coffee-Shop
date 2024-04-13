let $ = document;
let navbar = $.querySelector('.navbar');
let menuBtn = $.querySelector('#menu-btn');
let CartItem = $.querySelector('.cart-items-container');
let CartBtn = $.querySelector('#cart-btn');
let searchForm = $.querySelector('.search-form');
let searchBtn = $.querySelector('#search-btn');


menuBtn.addEventListener('click', function () {
    navbar.classList.toggle('active');
    CartItem.classList.remove('active');
    searchForm.classList.remove('active');
})

CartBtn.addEventListener('click', function () {
    CartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
})

searchBtn.addEventListener('click', function () {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    CartItem.classList.remove('active');
})

window.addEventListener('scroll', function () {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    CartItem.classList.remove('active');
})