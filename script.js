// ---- Données des projets (à modifier / compléter facilement) ----
// Pour chaque projet, remplace "image" par le chemin de ta propre capture d'écran,
// par exemple "images/inscription-universite.png", placée dans un dossier /images
// à côté de index.html.
const projects = [
  {
    title: "Site d'inscription université privée",
    desc: "Application permettant aux étudiants de s'inscrire en ligne, avec gestion des candidatures et des dossiers.",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    image: "school.png",
    link: "http://max-school.atwebpages.com"
  },
  {
    title: "Site de réservation de chambre d'hôtel",
    desc: "Plateforme de réservation de chambres avec disponibilité, inscription, connexion et gestion des réservations.",
    tags: ["PHP", "MySQL", "JavaScript", "CSS"],
    image: "hotel.png",
    link: "http://med-hotels.atwebpages.com"
  },
  {
    title: "Bibliothèque en ligne",
    desc: "Application de gestion et de consultation de livres en ligne, avec ajout, modification, suppression et recherche.",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    image: "biblio.png",
    link: "http://biblio-net.atwebpages.com"
  },
  {
    title: "Site e-commerce",
    desc: "Boutique en ligne avec panier, catégories, produits et gestion des commandes.",
    tags: ["PHP", "MySQL", "JavaScript", "CSS"],
    image: "ecommerce.png",
    link: "#"
  }
];

const zoomIcon = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`;
const linkIcon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>`;

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = projects.map(p => `
    <article class="project-card">
      <div class="project-thumb" style="background-image:url('${p.image}')">
        <span class="zoom">${zoomIcon}</span>
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <a class="project-link" href="${p.link}" target="_blank" rel="noopener">${linkIcon} Voir le projet</a>
      </div>
    </article>
  `).join("");
}

// ---- Navigation active au scroll ----
function setupScrollSpy() {
  const links = document.querySelectorAll(".navbar a");
  const sections = [...links].map(link => document.querySelector(link.getAttribute("href")));

  window.addEventListener("scroll", () => {
    let current = sections[0];
    sections.forEach(sec => {
      if (sec && window.scrollY >= sec.offsetTop - 90) current = sec;
    });
    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
    });
  });
}

// ---- Smooth scroll ----
function setupSmoothScroll() {
  document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

// ---- Année dans le footer ----
function setupFooterYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

// ---- Bouton "Télécharger mon CV" ----
function setupCvButton() {
  document.getElementById("download-cv").addEventListener("click", e => {
    e.preventDefault();
    alert("Ajoute le lien vers ton fichier CV.pdf dans le bouton (id=\"download-cv\") pour activer le téléchargement.");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupScrollSpy();
  setupSmoothScroll();
  setupFooterYear();
  setupCvButton();
});
