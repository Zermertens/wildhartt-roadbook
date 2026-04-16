function toggleCheck(el) {
  el.classList.toggle('checked');
}

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.progress-nav a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.borderColor = 'transparent';
      });

      const link = document.querySelector(`.progress-nav a[href="#${entry.target.id}"]`);
      if (link) {
        link.style.color = 'var(--orange)';
        link.style.borderColor = 'var(--orange)';
      }
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));