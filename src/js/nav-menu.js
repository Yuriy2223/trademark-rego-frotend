// document.addEventListener('DOMContentLoaded', () => {
//   // Отримуємо всі посилання меню
//   const menuLinks = document.querySelectorAll('.menu-link');

//   // Отримуємо поточну URL-адресу (шлях сторінки)
//   const currentPath = window.location.pathname;

//   // Перевіряємо кожне посилання меню
//   menuLinks.forEach(link => {
//     // Якщо шлях посилання збігається з поточним шляхом
//     if (currentPath.includes(link.getAttribute('href').replace('../', ''))) {
//       link.classList.add('active'); // Додаємо клас active до активного посилання
//     }
//   });
// });
// document.addEventListener('DOMContentLoaded', () => {
//   // Отримуємо всі посилання меню
//   const menuLinks = document.querySelectorAll('.menu-link');

//   // Отримуємо поточну URL-адресу (шлях сторінки)
//   const currentPath = window.location.pathname;

//   // Перевіряємо кожне посилання меню
//   menuLinks.forEach(link => {
//     // Отримуємо шлях посилання без базового каталогу
//     const linkPath = link.getAttribute('href').replace('../', '/');

//     // Якщо поточний шлях містить шлях з посилання
//     if (currentPath.includes(linkPath)) {
//       link.classList.add('active'); // Додаємо клас active до активного посилання
//     }
//   });
// });
