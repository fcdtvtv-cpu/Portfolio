document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const site = document.getElementById('site');

  // Через 2.2 секунды убираем интро
  setTimeout(() => {
    intro.classList.add('hide');
    site.classList.add('visible');
  }, 2200);
});
