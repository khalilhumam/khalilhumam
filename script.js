
// MOBILE NAVIGATION

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

function closeMenu() {
  if (!toggle || !nav) return;

  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open navigation");
  toggle.textContent = "☰";
}

if (toggle && nav) {
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open navigation");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
    toggle.textContent = isOpen ? "×" : "☰";
  });

  // Close the menu after selecting a section.
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Close the menu with the Escape key.
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Close the menu when clicking outside it.
  document.addEventListener("click", event => {
    if (
      nav.classList.contains("open") &&
      !nav.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Reset the mobile menu when returning to desktop width.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}


// STICKY HEADER SCROLL EFFECT

const header = document.querySelector(".site-header");

function updateHeader() {
  if (!header) return;

  header.classList.toggle("scrolled", window.scrollY > 30);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();


// BACK TO TOP BUTTON
// Created automatically, so no additional HTML is required.

const backToTop = document.createElement("button");

backToTop.type = "button";
backToTop.className = "back-to-top";
backToTop.id = "back-to-top";
backToTop.setAttribute("aria-label", "Back to top");
backToTop.setAttribute("title", "Back to top");
backToTop.innerHTML = "↑";

document.body.appendChild(backToTop);

function updateBackToTop() {
  backToTop.classList.toggle("visible", window.scrollY > 350);
}

window.addEventListener("scroll", updateBackToTop, { passive: true });
updateBackToTop();

backToTop.addEventListener("click", () => {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  window.scrollTo({
    top: 0,
    behavior: reducedMotion ? "auto" : "smooth"
  });
});


// AUTOMATIC FOOTER YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
