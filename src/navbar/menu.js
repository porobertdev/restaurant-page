export default function Menu() {

    const images = {
        'ramen.jpg': 7.99,
        'soba.jpg': 3.99,
        'udon.jpg': 4.99,
        'yobisoba.jpg': 8.99
    };

    let html = '';

    for (let image of Object.keys(images)) {
        html += `
            <div class="dish">
                <img src="./assets/img/${image}">
                <span class="price">$${images[image]}</span>
            </div>
        `;
    }

    content.classList.add('menu');
    return html;
}