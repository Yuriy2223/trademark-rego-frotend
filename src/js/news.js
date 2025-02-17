// document.addEventListener('DOMContentLoaded', async function () {
//   const newsList = document.querySelector('.news-list');

//   async function fetchNews() {
//     try {
//       const response = await fetch('https://rego.com/news');
//       const newsData = await response.json();

//       renderNews(newsData.slice(0, 4));
//     } catch (error) {
//       console.error('Помилка завантаження новин:', error);
//     }
//   }

//   function renderNews(news) {
//     newsList.innerHTML = '';

//     news.forEach(item => {
//       const newsItem = document.createElement('li');
//       newsItem.classList.add('news-item');

//       newsItem.innerHTML = `
//         <a class="news-link" href="${item.url}" target="_blank">
//           <div class="news-img" style="background-image: url('${item.image}');"></div>
//           <div class="news-box">
//             <p class="news-box-title">${item.title}</p>
//             <p class="news-box-text">${item.text}</p>
//           </div>
//         </a>
//       `;

//       newsList.appendChild(newsItem);
//     });
//   }

//   fetchNews();
// });
