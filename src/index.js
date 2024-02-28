import "./style.css";
console.log('testing webpack');

import Home from './navbar/home.js';

const content = document.querySelector('#content');

content.innerHTML = Home();