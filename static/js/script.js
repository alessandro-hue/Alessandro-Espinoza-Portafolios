// ================================
// SCRIPT.JS — Funcional y simple
// ================================

// Marca automáticamente el año actual en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Agrega efecto "activo" a los enlaces de navegación según scroll
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 100;

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ================================
// FORMULARIO DE CONTACTO
// ================================
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    msg.style.color = "red";
    msg.textContent = "Por favor, completa todos los campos.";
    return;
  }

  // Simulación de envío
  msg.style.color = "var(--accent)";
  msg.textContent = "✅ Mensaje enviado correctamente. ¡Gracias por contactarme!";
  form.reset();

  // Limpia el mensaje después de unos segundos
  setTimeout(() => (msg.textContent = ""), 4000);
});
