
(() => {
  const footer = document.querySelector('.page-footer');
  const sentinel = document.querySelector('[data-footer-sentinel]');
  if(!footer || !sentinel) return;
  const io = new IntersectionObserver(e=>{
    footer.classList.toggle('show', e[0].isIntersecting);
  },{threshold:.1});
  io.observe(sentinel);
})();
