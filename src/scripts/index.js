import './components/app-bar';
import './components/restaurant-list';
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const menu = document.querySelector('#header__menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const navList = document.querySelector('.list-container');

menu.addEventListener('click', function (event) {
    navList.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    navList.classList.remove('open');
});

main.addEventListener('click', function () {
    navList.classList.remove('open');
});

console.log('Hello Coders! :)');
