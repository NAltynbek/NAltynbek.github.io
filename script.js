// Parallax on scroll — только на десктопе, на телефоне градиент фиксирован
document.addEventListener('DOMContentLoaded', () => {
  const glow = document.querySelector('.bg-glow');
  const isMobile = () => window.innerWidth <= 768;
  
  function updateGlow() {
    if (glow && !isMobile()) {
      const y = window.scrollY;
      glow.style.transform = `translateX(-50%) translateY(${y * 0.15}px)`;
    } else if (glow) {
      glow.style.transform = 'translateX(-50%) translateY(0)';
    }
  }
  
  window.addEventListener('scroll', updateGlow);
  window.addEventListener('resize', updateGlow);
  updateGlow();

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
