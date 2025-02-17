document.addEventListener('DOMContentLoaded', function () {
  const filterBtn = document.querySelector('.product-card-filter-button');
  const filterMenu = document.querySelector('.filter-menu-list');
  const filterItems = document.querySelectorAll('.filter-menu-item');

  filterBtn.addEventListener('click', () => {
    filterMenu.style.display =
      filterMenu.style.display === 'block' ? 'none' : 'block';
  });

  filterItems.forEach(item => {
    const titleWrapper = item.querySelector('.filter-menu-title-wrapper');
    const optionsList = item.querySelector('.filter-options-list');
    const arrowIcon = item.querySelector('.filter-menu-svg');

    if (titleWrapper && optionsList && arrowIcon) {
      titleWrapper.addEventListener('click', () => {
        const isOpen = item.classList.contains('filter-menu-item-open');
        filterItems.forEach(i => {
          i.classList.remove('filter-menu-item-open');
          i.querySelector('.filter-options-list').style.maxHeight = '0';
          i.querySelector('.filter-menu-svg').style.transform = 'rotate(0deg)';
        });

        if (!isOpen) {
          item.classList.add('filter-menu-item-open');
          optionsList.style.maxHeight = optionsList.scrollHeight + 'px';
          arrowIcon.style.transform = 'rotate(90deg)';
        }
      });
    }
  });
});
