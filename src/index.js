import './styles.css';
import dishCards from './template/dish-cards.hbs';
import dish from './menu.json';
import './js/changes-theme-color';

const listOfDishes = document.querySelector('.js-menu');

const addsDishCardsHtml = dish.map(dishCards).join('');

listOfDishes.innerHTML = addsDishCardsHtml;
