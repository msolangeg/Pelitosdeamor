
// Desplazamiento suave al hacer click en cada sección

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('main section a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});


// HEADER

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

<nav class="navContainer">
<a href="../index.html">Inicio</a>
<a href="../index.html#contact">Contacto</a>
<a href="../AboutUs/aboutUs.html">Nosotros</a>
<a href="../Adoptions/adoptions.html">Adopciones</a>
<a href="../Testimonials/testimonial.html">Peludos felices</a>
<a href="../HelpUS/helpUs.html">Ayudanos</a>
</nav>`

document.querySelector("header").innerHTML= header

// FOOTER


let footer = 
`
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
</div>`


document.querySelector("footer").innerHTML= footer

