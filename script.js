const revealItems = document.querySelectorAll('.hero-copy, .hero-portrait-wrap, .project, .about-content, .services, .contact-inner');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

revealItems.forEach((item, index) => {
  item.style.setProperty('--reveal-delay', `${Math.min(index * 70, 280)}ms`);
  revealObserver.observe(item);
});
