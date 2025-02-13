const videoLinks = document.querySelectorAll('.video-link');
const iframe = document.getElementById('video-player');

function clearActiveState() {
  document.querySelectorAll('.video-selection-box.active').forEach(box => {
    box.classList.remove('active');
  });
}

videoLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const videoId = link.getAttribute('data-video-id');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    clearActiveState();
    link.parentElement.classList.add('active');
  });
});
