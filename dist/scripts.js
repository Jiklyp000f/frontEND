"use strict";
// Массив данных для карточек
const cardsData = [
    { imgSrc: "img/card1.jpg", title: "Portal TV", description: "Smart video calling on the <br>biggest screen in your home", linkText: "Learn More" },
    { imgSrc: "img/card2.jpg", title: "Portal", description: "Smart video calling on a <br>10” HD display", linkText: "Learn More" },
    { imgSrc: "img/card3.jpg", title: "Portal+", description: "Smart video calling on a <br>15.6” HD display", linkText: "Learn More" },
    { imgSrc: "img/card4.jpg", title: "Portal Mini", description: "Smart video calling on an <br>8” HD display", linkText: "Learn More" }
];
// Функция для создания карточки
function createCard(card) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col-md-3");
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    const img = document.createElement("img");
    img.src = card.imgSrc;
    img.alt = card.title;
    img.classList.add("card-img-top");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerHTML = card.title;
    const description = document.createElement("p");
    description.classList.add("card-text");
    description.innerHTML = card.description;
    const link = document.createElement("a");
    link.href = "#";
    link.classList.add("text-white");
    link.textContent = card.linkText;
    overlay.appendChild(title);
    overlay.appendChild(description);
    overlay.appendChild(link);
    cardElement.appendChild(img);
    cardElement.appendChild(overlay);
    cardDiv.appendChild(cardElement);
    return cardDiv;
}
// Отрисовываем карточки в DOM
function renderCards(containerSelector, cards) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error("Контейнер не найден!");
        return;
    }
    cards.forEach((card) => {
        const cardElement = createCard(card);
        container.appendChild(cardElement);
    });
}
// Вызываем функцию рендеринга
renderCards(".row[data-type='cards']", cardsData);
