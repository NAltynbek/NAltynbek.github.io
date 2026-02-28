// Parallax on scroll
document.addEventListener('DOMContentLoaded', () => {
  const glow = document.querySelector('.bg-glow');
  
  window.addEventListener('scroll', () => {
    if (glow) {
      const y = window.scrollY;
      glow.style.transform = `translateX(-50%) translateY(${y * 0.2}px)`;
    }
  });

  // Scroll-triggered animations
  const animatedElements = document.querySelectorAll('[data-animate]');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
});
