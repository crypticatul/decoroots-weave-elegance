
export const setupRevealAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const revealCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        let delay = 0;

        if (target.dataset.delay) {
          delay = parseInt(target.dataset.delay, 10);
        }

        setTimeout(() => {
          if (target.classList.contains("reveal-animation")) {
            const animationClass = target.dataset.animation || "appear";
            target.classList.add(animationClass);
          }
        }, delay);
      }
    });
  };

  const observer = new IntersectionObserver(revealCallback, observerOptions);

  // Observe all elements with reveal-animation class
  document.querySelectorAll(".reveal-animation").forEach((el) => {
    observer.observe(el);
  });

  return observer;
};
