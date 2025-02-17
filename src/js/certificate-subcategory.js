document.addEventListener('DOMContentLoaded', () => {
  const categoryItems = document.querySelectorAll('.sidebar-category-item');
  const contentBlocks = document.querySelectorAll('.certificates-card-content');

  categoryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      document
        .querySelector('.category-active')
        ?.classList.remove('category-active');
      item.classList.add('category-active');

      document
        .querySelector('.certificates-active')
        ?.classList.remove('certificates-active');
      contentBlocks[index]?.classList.add('certificates-active');
    });
  });
});

// document.addEventListener('DOMContentLoaded', function () {
//   const sidebarItems = document.querySelectorAll('.sidebar-category-item');
//   const contentContainer = document.querySelector('.certificates-card-content');

//   fetch('/certificates-card.json')
//     .then(response => response.json())
//     .then(data => {
//       let currentPageId = 'page_1';
//       let currentCardId = 'card_1';

//       if (data[currentPageId] && data[currentPageId][currentCardId]) {
//         renderCertificates(data[currentPageId][currentCardId]);
//       } else {
//         console.error('Дані для цієї сторінки!');
//       }

//       sidebarItems.forEach(item => {
//         item.addEventListener('click', function () {
//           sidebarItems.forEach(i => i.classList.remove('category-active'));

//           this.classList.add('category-active');

//           currentCardId = this.dataset.category;

//           if (data[currentPageId] && data[currentPageId][currentCardId]) {
//             renderCertificates(data[currentPageId][currentCardId]);
//           } else {
//             contentContainer.innerHTML =
//               '<p>Дані для цієї категорії відсутні!</p>';
//           }
//         });
//       });
//     })
//     .catch(error => console.error('Помилка завантаження JSON:', error));

//   function renderCertificates(cardData) {
//     contentContainer.innerHTML = '';

//     Object.keys(cardData).forEach(listKey => {
//       const listData = cardData[listKey];

//       const title = document.createElement('h2');
//       title.classList.add('certificates-card-content-title');
//       title.textContent = listData.title;
//       contentContainer.appendChild(title);

//       const list = document.createElement('ul');
//       list.classList.add('content-certificate-list');

//       listData.certificates.forEach(cert => {
//         const listItem = document.createElement('li');
//         listItem.classList.add('content-certificate-item');

//         listItem.innerHTML = `
//           <img class="content-certificate-img" src="/img/pdf-img.webp" alt="PDF" />
//           <a class="content-certificate-link" href="${cert.link}" target="_blank">${cert.name}</a>
//         `;

//         list.appendChild(listItem);
//       });

//       contentContainer.appendChild(list);
//       contentContainer.appendChild(document.createElement('hr'));
//     });
//   }
// });

// <!-- Меню категорій -->
// <nav class="certificates-card-sidebar">
//   <ul class="sidebar-category-list">
//     <li class="sidebar-category-item active">Сертифікати ISO 9001</li>
//     <li class="sidebar-category-item">LPG PED Сертифікати Модуль D / D1</li>
//     <li class="sidebar-category-item">Модуль B сертифікатів LPG PED</li>
//     <li class="sidebar-category-item">LPG TPED - Сертифікати</li>
//     <li class="sidebar-category-item">Сертифікати України</li>
//   </ul>
// </nav>

// <!-- Основний контент -->
// <div class="certificates-card-content">
//   <h2 class="certificates-card-content-title">
//     Сертифікати ISO. REGO GmbH Європа
//   </h2>
//   <!-- Список перший -->
//   <ul class="content-certificate-first-list">
//     <li class="content-certificate-item">
//       <img
//         class="content-certificate-img"
//         src="/img/pdf-img.webp"
//         alt="PDF" />
//       <a class="content-certificate-link" href="#"
//         >ISO9001-Certificate_REGO_Europe__de.pdf</a
//       >
//     </li>
//     <li class="content-certificate-item">
//       <img
//         class="content-certificate-img"
//         src="/img/pdf-img.webp"
//         alt="PDF" />
//       <a class="content-certificate-link" href="#"
//         >ISO9001-Certificate_REGO_Europe__de.pdf</a
//       >
//     </li>
//     <li class="content-certificate-item">
//       <img
//         class="content-certificate-img"
//         src="/img/pdf-img.webp"
//         alt="PDF" />
//       <a class="content-certificate-link" href="#"
//         >ISO9001-Certificate_REGO_Europe__de.pdf</a
//       >
//     </li>
//     <li class="content-certificate-item">
//       <img
//         class="content-certificate-img"
//         src="/img/pdf-img.webp"
//         alt="PDF" />
//       <a class="content-certificate-link" href="#"
//         >ISO9001-Certificate_REGO_Europe__de.pdf</a
//       >
//     </li>
//     <li class="content-certificate-item">
//       <img
//         class="content-certificate-img"
//         src="/img/pdf-img.webp"
//         alt="PDF" />
//       <a class="content-certificate-link" href="#"
//         >ISO9001-Certificate_REGO_Europe__de.pdf</a
//       >
//     </li>
//   </ul>

//   <hr class="certificates-card-line" />

//   <h2 class="certificates-card-content-subtitle">
//     Сертифікат ISO. REGO США
//   </h2>

//   <!-- Список другий -->

//   <ul class="content-certificate-second-list">
//     <li class="content-certificate-item">
//       <img
//         class="content-certificate-img"
//         src="/img/pdf-img.webp"
//         alt="PDF" />
//       <a class="content-certificate-link" href="#"
//         >ISO9001-Certificate_REGO_Europe__de.pdf</a
//       >
//     </li>
//   </ul>
// </div>
