// Desplazamiento suave al hacer click en cada sección

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('main section a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

// HEADER-------------------------------------------

let header = `
<div class="logoWaveContainer">
<img
  class="logo"
  src="../HelpUS/logoBlue.png"
  alt="logo pelitos de amor"
/>


<img src="../HelpUS/wave2.svg" alt="wave navbar" />
<h1>PELITOS DE AMOR</h1>


</div>

<nav class="navContainer" id="nav">

<button class="cerrarMenu" id="cerrar"><i class="bi bi-x"></i></button>
<a href="../index.html">Inicio</a>
<a href="../index.html#contact">Contacto</a>
<a href="../AboutUs/aboutUs.html">Nosotros</a>
<a href="../Adoptions/adoptions.html">Adopciones</a>
<a href="../Testimonials/testimonial.html">Peludos felices</a>
<a href="../HelpUS/helpUs.html">Ayudanos</a>
</nav>
<button id="abrir" class="abrirMenu"><i class="bi bi-list"></i></button>`;

document.querySelector("header").innerHTML = header;

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

//FOOTER---------------------------------

let footer = `
<div class="containerFooter">
  <p class="nameFooter">- PELITOS DE AMOR -</p>

  <div class="navIcon">
    <img src="../HelpUS/icon/logoInsta.svg" />
    <img src="../HelpUS/icon/logoFace.svg" />
    <img src="../HelpUS/icon/logoWhats.svg" />
  </div>

  <div class="navConainerFooter">
    <a class="navFooter" href="../index.html">Inicio</a>
    <a class="navFooter" href="../index.html#contact">Contacto</a>
    <a class="navFooter" href="../AboutUs/aboutUs.html">Nosotros</a>
    <a class="navFooter" href="../Adoptions/adoptions.html">Adopciones</a>
    <a class="navFooter" href="../Testimonials/testimonial.html">Peludos felices</a>
    <a class="navFooter" href="../HelpUS/helpUs.html">Ayudanos</a>
  </div>
</div>
<div class="infoFooter">
  <p>Sitio realizado por 5codificar para CaC</p>
</div>`;

document.querySelector("footer").innerHTML = footer;



//-----Validación formulario----
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const contactNumberInput = document.getElementById("contactNumber");

  form.addEventListener("submit", function (event) {
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const contactNumber = form.elements["contact-number"].value;
    const message = form.elements["message"].value;
    const reason = form.elements["reason"].value;

    let errorMessage = "";

    if (name.trim() === "") {
      errorMessage += "Por favor, ingrese su nombre.\n";
    }

    if (email.trim() === "") {
      errorMessage += "Por favor, ingrese su correo electrónico.\n";
    } else if (!validateEmail(email)) {
      errorMessage += "Por favor, ingrese un correo electrónico válido.\n";
    }

    if (contactNumber.trim() === "") {
      errorMessage += "Por favor, ingrese su número de contacto.\n";
    } else if (!/^\d+$/.test(contactNumber)) {
      errorMessage +=
        "Por favor, ingrese solo números en el campo de número de contacto.\n";
    }

    if (message.trim() === "") {
      errorMessage += "Por favor, ingrese su mensaje.\n";
    }

    if (reason === "") {
      errorMessage += "Por favor, seleccione un motivo.\n";
    }

    if (errorMessage !== "") {
      alert(errorMessage);
      event.preventDefault();
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  contactNumberInput.addEventListener("input", function (event) {
    this.value = this.value.replace(/\D/g, "");
  });
});


