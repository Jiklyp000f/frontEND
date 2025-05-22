"use strict";
// // Массив данных для карточек
// const cardsData: Card[] = [
//     { imgSrc: "img/card1.jpg", title: "Portal TV", description: "Smart video calling on the <br>biggest screen in your home", linkText: "Learn More" },
//     { imgSrc: "img/card2.jpg", title: "Portal", description: "Smart video calling on a <br>10” HD display", linkText: "Learn More" },
//     { imgSrc: "img/card3.jpg", title: "Portal+", description: "Smart video calling on a <br>15.6” HD display", linkText: "Learn More" },
//     { imgSrc: "img/card4.jpg", title: "Portal Mini", description: "Smart video calling on an <br>8” HD display", linkText: "Learn More" }
// ];
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Функция для создания карточки с использованием шаблонной строки
function createCard(card) {
    const cardHTML = `
        <div class="col-md-3">
            <div class="card">
                <img src="${card.imgSrc}" class="card-img-top" alt="${card.title}">
                <div class="overlay">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.description}</p>
                    <a href="#" class="text-white">${card.linkText}</a>
                </div>
            </div>
        </div>
    `;
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = cardHTML;
    return cardDiv.firstElementChild;
}
function loadCardsData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('data/cards.json');
            if (!response.ok)
                throw new Error(`HTTP error! Status: ${response.status}`);
            const data = yield response.json();
            return data.cards;
        }
        catch (error) {
            console.error('Error loading cards:', error);
            return [];
        }
    });
}
// Модифицированная функция рендеринга
function renderCards(containerSelector) {
    return __awaiter(this, void 0, void 0, function* () {
        const container = document.querySelector(containerSelector);
        if (!container) {
            console.error("Container not found!");
            return;
        }
        // Show loading state
        container.innerHTML = '<div class="col-12 text-center py-5">Loading cards...</div>';
        try {
            const cards = yield loadCardsData();
            container.innerHTML = '';
            cards.forEach(card => {
                const cardElement = createCard(card);
                container.appendChild(cardElement);
            });
        }
        catch (error) {
            container.innerHTML = `
            <div class="col-12 alert alert-danger">
                Error loading cards. 
                <button onclick="location.reload()" class="btn btn-link">Try again</button>
            </div>
        `;
        }
    });
}
// Start after DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    renderCards(".row.g-3[data-type='cards']");
});
