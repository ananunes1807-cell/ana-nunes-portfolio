const editableLinks = {
  "alion-demo": "https://ananunes1807-cell.github.io/app-treino-supabase/",
  "alion-code": "https://github.com/ananunes1807-cell/app-treino-supabase",
  "chamados-demo": "https://chamados-empresa.web.app/",
  "chamados-code": "https://github.com/ananunes1807-cell",
  "demandas-demo": "https://central-demandas-pessoal.web.app/",
  "demandas-code": "https://github.com/ananunes1807-cell/central-demandas-pessoal",
  github: "https://github.com/ananunes1807-cell",
  linkedin: "https://www.linkedin.com/in/anacarolina-infra-ti/",
  email: "mailto:ananunes1807@gmail.com",
  whatsapp: "https://wa.me/5594991022115?text=Ol%C3%A1%2C%20Ana!%20Encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
};

const editableStats = {
  publicRepos: 10
};

document.querySelectorAll("[data-link]").forEach((link) => {
  const key = link.dataset.link;
  const url = editableLinks[key];

  if (link.tagName === "BUTTON") {
    return;
  }

  if (url) {
    link.href = url;
  }

  if (!url || url === "#") {
    link.setAttribute("aria-label", `${link.textContent.trim()} - link a editar`);
    return;
  }

  if (url.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
});

document.querySelectorAll("[data-project-image]").forEach((image) => {
  image.addEventListener("error", () => {
    image.classList.add("is-missing");
  });
});

const stats = {
  publishedProjects: document.querySelectorAll(".project-card").length,
  technologies: document.querySelectorAll(".skills span").length,
  publicRepos: editableStats.publicRepos
};

document.querySelectorAll("[data-stat]").forEach((item) => {
  item.textContent = stats[item.dataset.stat] ?? 0;
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("[data-current-year]").textContent = new Date().getFullYear();
