import meals from '../data/meals.json';

export default function Menu() {

    let html = '';

    for (let meal of meals) {
        html += `
            <div class="dish">
                <img src="./assets/img/${meal.name}">
                <span class="price">$${meal.price}</span>
            </div>
        `;
    }

    content.classList.add('menu');
    return html;
}