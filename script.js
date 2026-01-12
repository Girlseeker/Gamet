const counters = document.querySelectorAll("[data-counter]");

const animateCount = (element) => {
  const target = Number(element.dataset.counter || 0);
  const duration = 1200;
  const start = performance.now();

  const tick = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const value = Math.floor(progress * target);
    element.textContent = value;
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      element.textContent = target;
    }
  };

  requestAnimationFrame(tick);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);

counters.forEach((counter) => observer.observe(counter));
