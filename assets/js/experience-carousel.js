document.addEventListener("DOMContentLoaded", function () {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  document.querySelectorAll(".experience-carousel .archive__item-teaser").forEach(function (carousel) {
    const images = Array.from(carousel.querySelectorAll(".experience-carousel__image"));
    const previous = carousel.querySelector(".experience-carousel__arrow--previous");
    const next = carousel.querySelector(".experience-carousel__arrow--next");
    if (images.length < 2 || !previous || !next) return;

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
        }, 4000);
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
});
