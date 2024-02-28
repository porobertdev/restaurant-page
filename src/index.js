import "./style.css";
console.log('testing webpack');

import Home from './navbar/home.js';
import Menu from './navbar/menu.js';

const content = document.querySelector('#content');

content.innerHTML = Menu();