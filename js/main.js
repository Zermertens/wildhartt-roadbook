function toggleCheck(el) {
  el.classList.toggle('checked');
}

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.progress-nav a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '#fefded';
        link.style.borderColor = 'transparent';
      });

      const activeLink = document.querySelector(`.progress-nav a[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.style.color = '#ff9441';
        activeLink.style.borderColor = '#ff9441';
      }
    }
  });
}, {
  threshold: 0.3 });

sections.forEach(section => observer.observe(section));

// Logique assurance → gérée par la modale inline dans index.html (openAssuranceModal / sendAssuranceEmail)

const partnerCodeButtons = document.querySelectorAll(".partner-code");

partnerCodeButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const code = button.dataset.code;

    try {
      await navigator.clipboard.writeText(code);

      const originalText = button.textContent;
      button.textContent = "Copié !";

      setTimeout(() => {
        button.textContent = originalText;
      }, 1500);
    } catch (error) {
      console.error("Erreur lors de la copie :", error);

      const originalText = button.textContent;
      button.textContent = "Erreur";

      setTimeout(() => {
        button.textContent = originalText;
      }, 1500);
    }
  });
});