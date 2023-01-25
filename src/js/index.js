import '../scss/main.scss';


console.log('HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!')

const hamburger = document.querySelector('.header__hamburger--js');
hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.nav--js');
    nav.classList.toggle('nav__open')
})