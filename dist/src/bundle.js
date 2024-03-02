(()=>{"use strict";var n={464:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(354),r=t.n(o),a=t(314),A=t.n(a)()(r());A.push([n.id,"#content.about {\n    display: block;\n    width: 50%;\n    margin: 0 auto;\n    padding: 6rem 0;\n\n    & p {\n        margin-top: 2rem;\n    }\n}","",{version:3,sources:["webpack://./src/css/about.css"],names:[],mappings:"AAAA;IACI,cAAc;IACd,UAAU;IACV,cAAc;IACd,eAAe;;IAEf;QACI,gBAAgB;IACpB;AACJ",sourcesContent:["#content.about {\n    display: block;\n    width: 50%;\n    margin: 0 auto;\n    padding: 6rem 0;\n\n    & p {\n        margin-top: 2rem;\n    }\n}"],sourceRoot:""}]);const i=A},683:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(354),r=t.n(o),a=t(314),A=t.n(a)()(r());A.push([n.id,"#content.contact {\n    width: 30%;\n    margin: 0 auto;\n\n    & form {\n        display: flex;\n        flex-direction: column;\n        gap: 1.2rem;\n        flex: 1;\n        \n\n        & input,\n          textarea {\n            background-color: var(--pink-dark);\n            border-radius: 8px;\n        }\n\n        & input {\n            padding: 0.5rem;\n        }\n    }\n}","",{version:3,sources:["webpack://./src/css/contact.css"],names:[],mappings:"AAAA;IACI,UAAU;IACV,cAAc;;IAEd;QACI,aAAa;QACb,sBAAsB;QACtB,WAAW;QACX,OAAO;;;QAGP;;YAEI,kCAAkC;YAClC,kBAAkB;QACtB;;QAEA;YACI,eAAe;QACnB;IACJ;AACJ",sourcesContent:["#content.contact {\n    width: 30%;\n    margin: 0 auto;\n\n    & form {\n        display: flex;\n        flex-direction: column;\n        gap: 1.2rem;\n        flex: 1;\n        \n\n        & input,\n          textarea {\n            background-color: var(--pink-dark);\n            border-radius: 8px;\n        }\n\n        & input {\n            padding: 0.5rem;\n        }\n    }\n}"],sourceRoot:""}]);const i=A},310:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(354),r=t.n(o),a=t(314),A=t.n(a)()(r());A.push([n.id,"#content.home {\n\n    gap: 8rem;\n\n    & img {\n        width: 25rem;\n        height: 25rem;\n    }\n\n    & .welcome {\n        align-self: center;\n\n        & h1 {\n            font-size: 3rem;\n\n            & p {\n                margin: 0;\n            }\n        }\n\n        & span {\n            color: var(--pink);\n        }\n    }\n}","",{version:3,sources:["webpack://./src/css/home.css"],names:[],mappings:"AAAA;;IAEI,SAAS;;IAET;QACI,YAAY;QACZ,aAAa;IACjB;;IAEA;QACI,kBAAkB;;QAElB;YACI,eAAe;;YAEf;gBACI,SAAS;YACb;QACJ;;QAEA;YACI,kBAAkB;QACtB;IACJ;AACJ",sourcesContent:["#content.home {\n\n    gap: 8rem;\n\n    & img {\n        width: 25rem;\n        height: 25rem;\n    }\n\n    & .welcome {\n        align-self: center;\n\n        & h1 {\n            font-size: 3rem;\n\n            & p {\n                margin: 0;\n            }\n        }\n\n        & span {\n            color: var(--pink);\n        }\n    }\n}"],sourceRoot:""}]);const i=A},22:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(354),r=t.n(o),a=t(314),A=t.n(a)()(r());A.push([n.id,"#content.menu {\n    width: 50%;\n    margin: 0 auto;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n\n    gap: 2rem;\n\n    & .dish {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n        gap: 1rem;\n\n        & img {\n            width: 15rem;\n            height: 10rem;\n            border-radius: 15px;\n        }\n\n    }\n}","",{version:3,sources:["webpack://./src/css/menu.css"],names:[],mappings:"AAAA;IACI,UAAU;IACV,cAAc;;IAEd,aAAa;IACb,2DAA2D;;IAE3D,SAAS;;IAET;QACI,aAAa;QACb,sBAAsB;QACtB,yBAAyB;QACzB,SAAS;;QAET;YACI,YAAY;YACZ,aAAa;YACb,mBAAmB;QACvB;;IAEJ;AACJ",sourcesContent:["#content.menu {\n    width: 50%;\n    margin: 0 auto;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n\n    gap: 2rem;\n\n    & .dish {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n        gap: 1rem;\n\n        & img {\n            width: 15rem;\n            height: 10rem;\n            border-radius: 15px;\n        }\n\n    }\n}"],sourceRoot:""}]);const i=A},208:(n,e,t)=>{t.d(e,{A:()=>p});var o=t(354),r=t.n(o),a=t(314),A=t.n(a),i=t(310),s=t(22),c=t(683),d=t(464),l=A()(r());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap);"]),l.i(i.A),l.i(s.A),l.i(c.A),l.i(d.A),l.push([n.id,":root {\n    --bkg-clr: #2F293D;\n    --pink: #FF9595;\n    --pink-light: #FFDDDD;\n    --pink-dark: #D49C9C;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody,\nheader,\nnav,\n.social {\n    display: flex;\n}\n\nbody {\n    margin: 0;\n    padding: 1rem;\n    background-color: var(--bkg-clr);\n    user-select: none;\n\n    font-family: 'Inter';\n    color: var(--pink-light);\n\n    flex-direction: column;\n}\n\nbutton,\ninput,\ntextarea {\n    appearance: none;\n    border: none;\n    outline: none;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nheader {\n    justify-content: space-between;\n    font-weight: bold;\n\n    & .logo {\n        width: 10rem;\n    }\n\n    & nav {\n        gap: 1.2rem;\n        font-weight: lighter;\n\n        & button {\n            background-color: transparent;\n            color: var(--pink-light);\n        }\n\n        /* to do: use JS because it's buggy this way */\n        & button:focus {\n            color: var(--pink);\n        }\n    }\n}\n\nfooter {\n\n    & .social {\n        justify-content: flex-end;\n        gap: 0.8rem;\n\n        & img {\n            width: 1.5rem;\n            height: 1.5rem;\n        }\n    }\n}\n\n#content {\n    display: flex;\n\n    padding: 2rem 0;\n\n    & button {\n        margin-top: 1rem;\n        padding: 0.7rem 1.5rem;\n        border-radius: 9px;\n        background-color: var(--pink);\n        color: white;\n        font-weight: bold;\n    }\n\n    & button:hover {\n        background-color: white;\n        color: var(--pink);\n    }\n}\n\n#content.home {\n    margin: 0 1rem;\n}\n\n@media only screen and (max-width: 768px) {\n    \n    body {\n        display: flex;\n        flex-direction: column;\n        gap: 0.7rem;\n        padding: 0;\n    }\n\n    nav {\n        padding: 1rem;\n    }\n\n    footer {\n        padding: 10%;\n        align-self: center;\n    }\n    \n    #content.home {\n        flex-direction: column;\n        gap: 1rem;\n\n        padding: 2rem;\n        margin: 0 auto;\n\n        & img {\n            width: 20rem;\n        }\n\n        & .welcome {\n            display: flex;\n            flex-direction: column;\n            \n            & h1 {\n                font-size: 2.5rem;\n            }\n            \n        }\n\n    }\n\n    #content.contact {\n        width: 70%;\n\n        & form {\n            gap: 1.6rem;\n\n            & input {\n                padding: 1rem;\n            }\n        }\n    }\n\n    #content.contact,\n    #content.about {\n        margin-bottom: 3rem;\n    }\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAOA;IACI,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;;;IAII,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,aAAa;IACb,gCAAgC;IAChC,iBAAiB;;IAEjB,oBAAoB;IACpB,wBAAwB;;IAExB,sBAAsB;AAC1B;;AAEA;;;IAGI,gBAAgB;IAChB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;;IAEjB;QACI,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,oBAAoB;;QAEpB;YACI,6BAA6B;YAC7B,wBAAwB;QAC5B;;QAEA,8CAA8C;QAC9C;YACI,kBAAkB;QACtB;IACJ;AACJ;;AAEA;;IAEI;QACI,yBAAyB;QACzB,WAAW;;QAEX;YACI,aAAa;YACb,cAAc;QAClB;IACJ;AACJ;;AAEA;IACI,aAAa;;IAEb,eAAe;;IAEf;QACI,gBAAgB;QAChB,sBAAsB;QACtB,kBAAkB;QAClB,6BAA6B;QAC7B,YAAY;QACZ,iBAAiB;IACrB;;IAEA;QACI,uBAAuB;QACvB,kBAAkB;IACtB;AACJ;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI;QACI,aAAa;QACb,sBAAsB;QACtB,WAAW;QACX,UAAU;IACd;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,YAAY;QACZ,kBAAkB;IACtB;;IAEA;QACI,sBAAsB;QACtB,SAAS;;QAET,aAAa;QACb,cAAc;;QAEd;YACI,YAAY;QAChB;;QAEA;YACI,aAAa;YACb,sBAAsB;;YAEtB;gBACI,iBAAiB;YACrB;;QAEJ;;IAEJ;;IAEA;QACI,UAAU;;QAEV;YACI,WAAW;;YAEX;gBACI,aAAa;YACjB;QACJ;IACJ;;IAEA;;QAEI,mBAAmB;IACvB;AACJ",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');\n\n@import './css/home.css';\n@import './css/menu.css';\n@import './css/contact.css';\n@import './css/about.css';\n\n:root {\n    --bkg-clr: #2F293D;\n    --pink: #FF9595;\n    --pink-light: #FFDDDD;\n    --pink-dark: #D49C9C;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody,\nheader,\nnav,\n.social {\n    display: flex;\n}\n\nbody {\n    margin: 0;\n    padding: 1rem;\n    background-color: var(--bkg-clr);\n    user-select: none;\n\n    font-family: 'Inter';\n    color: var(--pink-light);\n\n    flex-direction: column;\n}\n\nbutton,\ninput,\ntextarea {\n    appearance: none;\n    border: none;\n    outline: none;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nheader {\n    justify-content: space-between;\n    font-weight: bold;\n\n    & .logo {\n        width: 10rem;\n    }\n\n    & nav {\n        gap: 1.2rem;\n        font-weight: lighter;\n\n        & button {\n            background-color: transparent;\n            color: var(--pink-light);\n        }\n\n        /* to do: use JS because it's buggy this way */\n        & button:focus {\n            color: var(--pink);\n        }\n    }\n}\n\nfooter {\n\n    & .social {\n        justify-content: flex-end;\n        gap: 0.8rem;\n\n        & img {\n            width: 1.5rem;\n            height: 1.5rem;\n        }\n    }\n}\n\n#content {\n    display: flex;\n\n    padding: 2rem 0;\n\n    & button {\n        margin-top: 1rem;\n        padding: 0.7rem 1.5rem;\n        border-radius: 9px;\n        background-color: var(--pink);\n        color: white;\n        font-weight: bold;\n    }\n\n    & button:hover {\n        background-color: white;\n        color: var(--pink);\n    }\n}\n\n#content.home {\n    margin: 0 1rem;\n}\n\n@media only screen and (max-width: 768px) {\n    \n    body {\n        display: flex;\n        flex-direction: column;\n        gap: 0.7rem;\n        padding: 0;\n    }\n\n    nav {\n        padding: 1rem;\n    }\n\n    footer {\n        padding: 10%;\n        align-self: center;\n    }\n    \n    #content.home {\n        flex-direction: column;\n        gap: 1rem;\n\n        padding: 2rem;\n        margin: 0 auto;\n\n        & img {\n            width: 20rem;\n        }\n\n        & .welcome {\n            display: flex;\n            flex-direction: column;\n            \n            & h1 {\n                font-size: 2.5rem;\n            }\n            \n        }\n\n    }\n\n    #content.contact {\n        width: 70%;\n\n        & form {\n            gap: 1.6rem;\n\n            & input {\n                padding: 1rem;\n            }\n        }\n    }\n\n    #content.contact,\n    #content.about {\n        margin-bottom: 3rem;\n    }\n}"],sourceRoot:""}]);const p=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(A[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&A[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},A=[],i=0;i<n.length;i++){var s=n[i],c=o.base?s[0]+o.base:s[0],d=a[c]||0,l="".concat(c," ").concat(d);a[c]=d+1;var p=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var u=r(m,o);o.byIndex=i,e.splice(i,0,{identifier:l,updater:u,references:1})}A.push(l)}return A}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var A=0;A<a.length;A++){var i=t(a[A]);e[i].references--}for(var s=o(n,r),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),a=t(659),A=t.n(a),i=t(56),s=t.n(i),c=t(540),d=t.n(c),l=t(113),p=t.n(l),m=t(208),u={};function f(){return content.classList.add("home"),'\n        <img src="./assets/img/header.svg">\n        <div class="welcome">\n            <h1>\n                <span>The Best Ramen</span>\n                <p>In The Town!</p>\n            </h1>\n            <p>\n                Having a rough day? Soften it with our delicious ramen.\n            </p>\n\n            <button>Reserve A Table</button>\n        </div>\n    '}u.styleTagTransform=p(),u.setAttributes=s(),u.insert=A().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=d(),e()(m.A,u),m.A&&m.A.locals&&m.A.locals;const g=JSON.parse('[{"name":"ramen.jpg","price":7.99},{"name":"soba.jpg","price":3.99},{"name":"udon.jpg","price":4.99},{"name":"yobisoba.jpg","price":8.99}]'),C=document.querySelector("#content");C.innerHTML=f();const h=document.querySelectorAll("nav > button");for(const n of h)n.addEventListener("click",b);function b(n){const e=this.textContent;switch(C.setAttribute("class",""),!0){case"Home"==e:C.innerHTML=f();break;case"Menu"==e:C.innerHTML=function(){let n="";for(let e of g)n+=`\n            <div class="dish">\n                <img src="./assets/img/${e.name}">\n                <span class="price">$${e.price}</span>\n            </div>\n        `;return content.classList.add("menu"),n}();break;case"Contact"==e:C.innerHTML=(content.classList.add("contact"),'\n        <form>\n            <label for="fname">First Name:</label>\n            <input type="text" name="fname" id="fname">\n\n            <label for="lname">Last Name:</label>\n            <input type="text" name="lname" id="lname">\n\n            <label for="email">Email address:</label>\n            <input type="email" name="email" id="email">\n\n            <label for="message">Message:</label>\n            <textarea rows="4" name="message" id="message"></textarea>\n\n            <button>SUBMIT</button>\n        </form>\n    ');break;case"About"==e:C.innerHTML=(content.classList.add("about"),"\n        <p>\n            In the heart of Tokyo, chef Akira's love for authentic ramen inspired him to create Ramen Delight.\n        </p>\n        <p>\n            With recipes passed down from generations, he opened our doors, offering savory bowls of tradition and innovation. From Tokyo to our vibrant city, we've become a beloved spot for friends and family to savor the warmth of good food and lasting memories.\n        </p>\n        \n        <p>\n            Welcome to Ramen Delight, where every slurp tells a tale of passion and flavor.\n        </p>\n    ")}}})()})();
//# sourceMappingURL=bundle.js.map