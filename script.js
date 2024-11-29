document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    // Функция для закрытия меню
    function closeMenu() {
        burgerMenu.classList.remove('active');
        mobileMenu.classList.remove('open');
    }

    // Обработчик клика на бургер-меню
    burgerMenu.addEventListener('click', function (e) {
        e.stopPropagation(); // Останавливаем всплытие события, чтобы не закрыть меню сразу
        burgerMenu.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    // Закрытие меню при клике на ссылку внутри
    mobileMenu.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            closeMenu();
        }
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', function (e) {
        if (!mobileMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
            closeMenu();
        }
    });
});
