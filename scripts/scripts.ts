// // Массив данных для карточек
// const cardsData: Card[] = [
//     { imgSrc: "img/card1.jpg", title: "Portal TV", description: "Smart video calling on the <br>biggest screen in your home", linkText: "Learn More" },
//     { imgSrc: "img/card2.jpg", title: "Portal", description: "Smart video calling on a <br>10” HD display", linkText: "Learn More" },
//     { imgSrc: "img/card3.jpg", title: "Portal+", description: "Smart video calling on a <br>15.6” HD display", linkText: "Learn More" },
//     { imgSrc: "img/card4.jpg", title: "Portal Mini", description: "Smart video calling on an <br>8” HD display", linkText: "Learn More" }
// ];

// Функция для создания карточки с использованием шаблонной строки
function createCard(card: Card): HTMLElement {
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
    return cardDiv.firstElementChild as HTMLElement;
}

// // Отрисовываем карточки в DOM
// function renderCards(containerSelector: string, cards: Card[]): void {
//     const container = document.querySelector(containerSelector);
//     if (!container) {
//         console.error("Контейнер не найден!");
//         return;
//     }

//     cards.forEach((card) => {
//         const cardElement = createCard(card);
//         container.appendChild(cardElement);
//     });
// }

// // Вызываем функцию рендеринга
// renderCards(".row.g-3[data-type='cards']", cardsData);

interface Card {
    imgSrc: string;
    title: string;
    description: string;
    linkText: string;
}

async function loadCardsData(): Promise<Card[]> {
    try {
        const response = await fetch('data/cards.json');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        return data.cards;
    } catch (error) {
        console.error('Error loading cards:', error);
        return [];
    }
}

// Модифицированная функция рендеринга
async function renderCards(containerSelector: string): Promise<void> {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error("Container not found!");
        return;
    }

    // Show loading state
    container.innerHTML = '<div class="col-12 text-center py-5">Loading cards...</div>';

    try {
        const cards = await loadCardsData();
        container.innerHTML = '';
        
        cards.forEach(card => {
            const cardElement = createCard(card);
            container.appendChild(cardElement);
        });
    } catch (error) {
        container.innerHTML = `
            <div class="col-12 alert alert-danger">
                Error loading cards. 
                <button onclick="location.reload()" class="btn btn-link">Try again</button>
            </div>
        `;
    }
}

// Start after DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    renderCards(".row.g-3[data-type='cards']");
});