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

// 1. récupérer ton lien dans le HTML
const link = document.getElementById("email-link");

// 2. définir tes variables dynamiques (à remplacer par ton backend plus tard)
const expedition = "Ski de rando en Laponie";
const dateStart = "12 mars 2026";
const dateEnd = "18 mars 2026";
const price = "45€";
const name = "Maxime";

// 3. créer le message
const body = `Hello l'équipe Wildhartt 🤩,

Je souhaite souscrire à une assurance assistance pour mon expédition ${expedition} du ${dateStart} au ${dateEnd}.

Je confirme ma souscription au prix de ${price} et attends un lien de paiement de votre part.

Je me réjouis d'y être 🔥

Merci beaucoup

${name}`;

// 4. encoder le message (TRÈS IMPORTANT)
const encodedBody = encodeURIComponent(body);

// 5. créer le mailto
const mailto = `mailto:hello@wildhartt.com?subject=Souscription assurance&body=${encodedBody}`;

// 6. injecter dans le lien
link.href = mailto;

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