document.addEventListener('DOMContentLoaded', () => {
    // Инициализация модального окна
    const modal = new bootstrap.Modal('#loginModal');
    
    // Обработчик открытия
    document.getElementById('openModal')?.addEventListener('click', () => {
        modal.show();
    });

    // Закрытие при клике на подложку
    document.querySelector('.modal')?.addEventListener('click', (e) => {
        if (e.target === document.querySelector('.modal')) {
            modal.hide();
        }
    });

    // Обработка отправки формы
    document.querySelector('#loginModal form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        modal.hide();
        // Здесь можно добавить обработку данных формы
    });
});