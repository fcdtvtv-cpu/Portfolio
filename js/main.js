document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const site = document.getElementById('site');
  const skipButton = document.getElementById('introSkip');

  if (!intro || !site) return;

  const storageKey = 'apexcode-intro-seen';

  const showSite = () => {
    intro.classList.add('hide');
    site.classList.add('visible');
  };

  // Не повторяем заставку при каждом возвращении на главную в этой вкладке.
  try {
    if (sessionStorage.getItem(storageKey) === '1') {
      showSite();
      return;
    }
  } catch (error) {
    // Если хранилище недоступно, просто показываем заставку как обычно.
  }

  let finished = false;
  const finishIntro = () => {
    if (finished) return;
    finished = true;

    try {
      sessionStorage.setItem(storageKey, '1');
    } catch (error) {
      // Сайт продолжит работать и без sessionStorage.
    }

    showSite();
  };

  if (skipButton) {
    skipButton.addEventListener('click', finishIntro);
  }

  const prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Короткая заставка: без долгого ожидания перед просмотром сайта.
  window.setTimeout(finishIntro, prefersReducedMotion ? 250 : 1450);
});
