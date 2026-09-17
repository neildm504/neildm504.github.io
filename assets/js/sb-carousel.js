document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".sb-internship .archive__item-teaser");
  if (!carousel) return;

  const images = Array.from(carousel.querySelectorAll(".sb-carousel__image"));
  const previous = carousel.querySelector(".sb-carousel__arrow--previous");
  const next = carousel.querySelector(".sb-carousel__arrow--next");
  if (images.length < 2 || !previous || !next) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let current = 0;
  let timer;

  function show(index) {
    current = (index + images.length) % images.length;
    images.forEach(function (image, imageIndex) {
      const active = imageIndex === current;
      image.classList.toggle("is-active", active);
      if (active) image.removeAttribute("aria-hidden");
      else image.setAttribute("aria-hidden", "true");
    });
  }

  function restartAutoplay() {
    window.clearInterval(timer);
    if (!reducedMotion.matches && !document.hidden) {
      timer = window.setInterval(function () {
        show(current + 1);
      }, 5000);
    }
  }

  previous.hidden = false;
  next.hidden = false;
  previous.addEventListener("click", function () {
    show(current - 1);
    restartAutoplay();
  });
  next.addEventListener("click", function () {
    show(current + 1);
    restartAutoplay();
  });
  document.addEventListener("visibilitychange", restartAutoplay);
  reducedMotion.addEventListener("change", restartAutoplay);
  restartAutoplay();
});
