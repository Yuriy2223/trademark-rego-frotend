// document.addEventListener('DOMContentLoaded', function () {
//   const currentPath = window.location.pathname;

//   function setActiveClass(links, activeClass) {
//     links.forEach(link => {
//       if (link.getAttribute('href') === currentPath) {
//         link.classList.add(activeClass);
//       }
//     });
//   }

//   const menuLinks = document.querySelectorAll('.menu-link');
//   const burgerMenuLinks = document.querySelectorAll('.burger-menu-link');

//   setActiveClass(menuLinks, 'menu-link-active');
//   setActiveClass(burgerMenuLinks, 'burger-menu-link-active');
// });

document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname.split('/').pop();

  function setActiveClass(links, activeClass) {
    links.forEach(link => {
      const linkPath = link.getAttribute('href').split('/').pop();
      if (linkPath === currentPath) {
        link.classList.add(activeClass);
      }
    });
  }

  const menuLinks = document.querySelectorAll('.menu-link');
  const burgerMenuLinks = document.querySelectorAll('.burger-menu-link');

  setActiveClass(menuLinks, 'menu-link-active');
  setActiveClass(burgerMenuLinks, 'burger-menu-link-active');
});
