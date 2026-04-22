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

// 1. récupérer ton lien dans le HTML
const link = document.getElementById("email-link");

// 2. variables dynamiques injectées par Django (data-* sur le lien ou contexte template)
// En prod : remplacer par {{ expedition.titre }}, {{ booking.date_debut }}, etc.
const expedition = link.dataset.expedition || "[expedition_titre]";
const dateStart  = link.dataset.dateStart  || "[date_debut]";
const dateEnd    = link.dataset.dateEnd    || "[date_fin]";
const price      = link.dataset.price      || "[prix_assurance]";
const name       = link.dataset.userName   || "[prenom_participant]";

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