document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;

  function setActiveClass(links, activeClass) {
    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add(activeClass);
      }
    });
  }

  const menuLinks = document.querySelectorAll('.menu-link');
  const burgerMenuLinks = document.querySelectorAll('.burger-menu-link');

  setActiveClass(menuLinks, 'menu-link-active');
  setActiveClass(burgerMenuLinks, 'burger-menu-link-active');
});
