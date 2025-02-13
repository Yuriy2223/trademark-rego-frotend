document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('.category');

  categories.forEach(category => {
    category.addEventListener('click', () => {
      document.querySelector('.category.active')?.classList.remove('active');
      category.classList.add('active');
    });
  });
});
