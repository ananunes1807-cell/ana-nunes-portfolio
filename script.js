const editableLinks = {
  "alion-demo": "#",
  "alion-code": "#",
  "chamados-demo": "#",
  "chamados-code": "#",
  "demandas-demo": "#",
  "demandas-code": "#",
  github: "https://github.com/ananunes1807-cell",
  linkedin: "#",
  email: "mailto:seu-email@exemplo.com",
  whatsapp: "https://wa.me/5500000000000"
};

document.querySelectorAll("[data-link]").forEach((link) => {
  const key = link.dataset.link;
  const url = editableLinks[key];

  if (url) {
    link.href = url;
  }

  if (!url || url === "#") {
    link.setAttribute("aria-label", `${link.textContent.trim()} - link a editar`);
  }
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
