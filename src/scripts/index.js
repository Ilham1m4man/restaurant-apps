import './components/app-bar';
import './components/restaurant-list';
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const menu = document.querySelector('#header__menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const navList = document.querySelector('.list-container');

['click', 'keydown'].map( (event) => 
    menu.addEventListener(event, function (e) {
        navList.classList.toggle('open');
        console.log('jalan cuk')
        e.stopPropagation();
    })
);

['click', 'keydown'].map( (event) => 
    hero.addEventListener(event, function () {
        navList.classList.remove('open');
    })
);

['click', 'keydown'].map( (event) => 
    main.addEventListener(event, function () {
        navList.classList.remove('open');
    })
);

console.log('Hello Coders! :)');
