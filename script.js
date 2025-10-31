// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#' || !document.querySelector(targetId)) return;

    e.preventDefault();
    const targetEl = document.querySelector(targetId);

    targetEl.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Back to top button
document.getElementById('backTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
