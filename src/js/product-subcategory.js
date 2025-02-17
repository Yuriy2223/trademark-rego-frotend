// document.addEventListener('DOMContentLoaded', () => {
//   fetch('./product-card.json')
//     .then(response => response.json())
//     .then(jsonData => {
//       let currentPage = jsonData.page;
//       const totalPages = jsonData.totalPages;
//       const perPage = jsonData.perPage;
//       const itemsContainer = document.getElementById('cryogenicList');
//       const paginationContainer = document.getElementById('paginationNumbers');
//       const prevButton = document.getElementById('prevPage');
//       const nextButton = document.getElementById('nextPage');

//       function renderItems(page) {
//         itemsContainer.innerHTML = '';
//         const start = (page - 1) * perPage;
//         const end = start + perPage;
//         const items = jsonData.results.slice(start, end);

//         items.forEach(item => {
//           const li = document.createElement('li');
//           li.classList.add('product-card-item');
//           li.innerHTML = `
//             <a href="#" class="product-card-link">
//               <img src="${item.image}" alt="${item.title}" class="product-card-imgages" />
//               <div class="product-card-text-wrap">
//                 <p class="product-card-description">${item.description}</p>
//               </div>
//             </a>
//           `;
//           itemsContainer.appendChild(li);
//         });
//       }

//       function renderPagination() {
//         paginationContainer.innerHTML = '';

//         const createPageButton = (page, isTotal = false) => {
//           const button = document.createElement('button');
//           button.classList.add(
//             isTotal ? 'pagination-number-totall' : 'pagination-number'
//           );
//           if (page === currentPage)
//             button.classList.add('pagination-number-active');
//           button.textContent = page;
//           button.addEventListener('click', () => {
//             currentPage = page;
//             updatePagination();
//           });
//           return button;
//         };

//         paginationContainer.appendChild(createPageButton(1));

//         if (currentPage > 3) {
//           const dots = document.createElement('span');
//           dots.classList.add('pagination-dots');
//           dots.textContent = '...';
//           paginationContainer.appendChild(dots);
//         }

//         for (
//           let i = Math.max(2, currentPage - 1);
//           i <= Math.min(totalPages - 1, currentPage + 1);
//           i++
//         ) {
//           paginationContainer.appendChild(createPageButton(i));
//         }

//         if (currentPage < totalPages - 2) {
//           const dots = document.createElement('span');
//           dots.classList.add('pagination-dots');
//           dots.textContent = '...';
//           paginationContainer.appendChild(dots);
//         }

//         if (totalPages > 1) {
//           paginationContainer.appendChild(createPageButton(totalPages, true));
//         }
//       }

//       function updatePagination() {
//         renderItems(currentPage);
//         renderPagination();
//         prevButton.disabled = currentPage === 1;
//         nextButton.disabled = currentPage === totalPages;
//       }

//       prevButton.addEventListener('click', () => {
//         if (currentPage > 1) {
//           currentPage--;
//           updatePagination();
//         }
//       });

//       nextButton.addEventListener('click', () => {
//         if (currentPage < totalPages) {
//           currentPage++;
//           updatePagination();
//         }
//       });

//       updatePagination();
//     })
//     .catch(error => console.error('Помилка завантаження JSON:', error));
// });
