"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c;
    // Инициализация модального окна
    const modal = new bootstrap.Modal('#loginModal');
    // Обработчик открытия
    (_a = document.getElementById('openModal')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        modal.show();
    });
    // Закрытие при клике на подложку
    (_b = document.querySelector('.modal')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => {
        if (e.target === document.querySelector('.modal')) {
            modal.hide();
        }
    });
    // Обработка отправки формы
    (_c = document.querySelector('#loginModal form')) === null || _c === void 0 ? void 0 : _c.addEventListener('submit', (e) => {
        e.preventDefault();
        modal.hide();
        // Здесь можно добавить обработку данных формы
    });
});
