(() => {
  const footer = document.querySelector('.page-footer');
  const sentinel = document.querySelector('[data-footer-sentinel]');
  if (!footer || !sentinel) return;

  const show = () => footer.classList.add('footer-visible');
  const hide = () => footer.classList.remove('footer-visible');

  // Hidden by default until sentinel is in view (user is at page bottom)
  hide();

  const io = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry && entry.isIntersecting) show();
    else hide();
  }, { root: null, threshold: 0.01 });

  io.observe(sentinel);
})();