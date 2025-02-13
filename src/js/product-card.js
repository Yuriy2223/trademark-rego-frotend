// document.addEventListener('DOMContentLoaded', async function () {
//   const productList = document.getElementById('productList');
//   const paginationContainer = document.getElementById('paginationNumbers');
//   const prevButton = document.getElementById('prevPage');
//   const nextButton = document.getElementById('nextPage');

//   const productsPerPage = 12;
//   let currentPage = 1;
//   let totalPages = 1;
//   let products = [];

//   async function fetchProducts() {
//     try {
//       const response = await fetch('https://rego/products');
//       const data = await response.json();
//       products = data.items;

//       totalPages = Math.ceil(products.length / productsPerPage);
//       renderProducts();
//       renderPagination();
//     } catch (error) {
//       console.error('Помилка при завантаженні даних:', error);
//     }
//   }

//   function renderProducts() {
//     productList.innerHTML = '';

//     const start = (currentPage - 1) * productsPerPage;
//     const end = start + productsPerPage;
//     const visibleProducts = products.slice(start, end);

//     visibleProducts.forEach(product => {
//       const li = document.createElement('li');
//       li.classList.add('product-card-item');
//       li.innerHTML = `
//         <a href="${product.link}" class="product-card-link">
//           <img src="${product.image}" alt="${product.name}" class="product-hero-img" />
//           <div class="product-card-text-wrap">
//             <p>${product.name}</p>
//           </div>
//         </a>
//       `;
//       productList.appendChild(li);
//     });
//   }

//   function renderPagination() {
//     paginationContainer.innerHTML = '';

//     const maxVisiblePages = window.innerWidth <= 600 ? 3 : 5;
//     let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
//     let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

//     if (endPage - startPage < maxVisiblePages - 1) {
//       startPage = Math.max(1, endPage - maxVisiblePages + 1);
//     }

//     if (startPage > 1) {
//       addPageNumber(1);
//       if (startPage > 2) {
//         addDots();
//       }
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       addPageNumber(i);
//     }

//     if (endPage < totalPages) {
//       if (endPage < totalPages - 1) {
//         addDots();
//       }
//       addPageNumber(totalPages);
//     }

//     prevButton.disabled = currentPage === 1;
//     nextButton.disabled = currentPage === totalPages;
//   }

//   function addPageNumber(page) {
//     const pageButton = document.createElement('button');
//     pageButton.textContent = page;
//     pageButton.classList.add('page-number');
//     if (page === currentPage) {
//       pageButton.classList.add('active');
//     }
//     pageButton.addEventListener('click', () => {
//       currentPage = page;
//       renderProducts();
//       renderPagination();
//     });
//     paginationContainer.appendChild(pageButton);
//   }

//   function addDots() {
//     const dots = document.createElement('span');
//     dots.textContent = '...';
//     dots.classList.add('dots');
//     paginationContainer.appendChild(dots);
//   }

//   prevButton.addEventListener('click', () => {
//     if (currentPage > 1) {
//       currentPage--;
//       renderProducts();
//       renderPagination();
//     }
//   });

//   nextButton.addEventListener('click', () => {
//     if (currentPage < totalPages) {
//       currentPage++;
//       renderProducts();
//       renderPagination();
//     }
//   });

//   window.addEventListener('resize', renderPagination);

//   await fetchProducts();
// });
