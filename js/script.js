/* HERO SLIDER */
const slides = document.querySelectorAll(".hero-slide");
let slideActual = 0;

function mostrarSlide(indice) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === indice);
  });
}

function siguienteSlide() {
  slideActual = (slideActual + 1) % slides.length;
  mostrarSlide(slideActual);
}

if (slides.length > 0) {
  mostrarSlide(slideActual);
  setInterval(siguienteSlide, 4000);
}

/* ANIMACIONES AL SUBIR Y BAJAR */
const elementosReveal = document.querySelectorAll(".reveal");

function actualizarAnimaciones() {
  const alturaVentana = window.innerHeight;
  const puntoEntrada = alturaVentana * 0.88;
  const puntoSalida = -120;

  elementosReveal.forEach((elemento) => {
    const rect = elemento.getBoundingClientRect();

    if (rect.top < puntoEntrada && rect.bottom > puntoSalida) {
      elemento.classList.add("show");
    } else {
      elemento.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", actualizarAnimaciones);
window.addEventListener("resize", actualizarAnimaciones);
window.addEventListener("load", actualizarAnimaciones);

/* CERRAR MENÚ MÓVIL AL DAR CLICK */
const navLinks = document.querySelectorAll(".nav-link");
const menuNav = document.getElementById("menuNav");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992 && menuNav.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getInstance(menuNav) || new bootstrap.Collapse(menuNav, { toggle: false });
      bsCollapse.hide();
    }
  });
});