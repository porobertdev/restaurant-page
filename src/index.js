import "./style.css";
console.log('testing webpack');

import Home from './navbar/home.js';
import Menu from './navbar/menu.js';
import Contact from './navbar/contact.js';

const content = document.querySelector('#content');

// for testing till I add event listeners
content.innerHTML = Contact();