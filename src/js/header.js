document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('.btn-menu-burger');
  const burgerMenu = document.querySelector('.burger-menu');
  const closeButton = document.querySelector('.burger-menu-close');
  const menuLinks = document.querySelectorAll('.burger-menu-link');

  function closeMenu() {
    burgerMenu.classList.remove('active');
    burgerButton.setAttribute('aria-expanded', 'false');
    burgerMenu.setAttribute('aria-hidden', 'true');
  }

  burgerButton.addEventListener('click', function () {
    const isOpen = burgerMenu.classList.toggle('active');
    burgerButton.setAttribute('aria-expanded', isOpen.toString());
    burgerMenu.setAttribute('aria-hidden', (!isOpen).toString());
  });

  closeButton.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function (event) {
    if (
      burgerMenu.classList.contains('active') &&
      !burgerMenu.contains(event.target) &&
      !burgerButton.contains(event.target)
    ) {
      closeMenu();
    }
  });
});

// const button = document.querySelector('.button');
// const menu = document.querySelector('.menu');
// const menuLinks = document.querySelectorAll('.menu-link');

// button.addEventListener('click', () => {
//   button.classList.toggle('active');

//   if (button.classList.contains('active')) {
//     button.setAttribute('aria-expanded', 'true');
//     menu.setAttribute('aria-hidden', 'false');
//     menuLinks.forEach(link => link.setAttribute('tabindex', '0'));
//   } else {
//     button.setAttribute('aria-expanded', 'false');
//     menu.setAttribute('aria-hidden', 'true');
//     menuLinks.forEach(link => link.setAttribute('tabindex', '-1'));
//   }
// });
/*
//<nav class="nav-menu">
  <div class="products">
    <button class="btn-products">Продукти</button>
    <ul class="list-products">
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
    </ul>
  </div>
//</nav> */
