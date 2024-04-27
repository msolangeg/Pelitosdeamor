// Desplazamiento suave al hacer click en cada sección

// document.addEventListener('DOMContentLoaded', function() {
//     const links = document.querySelectorAll('header nav a[href^="#"]');
    
//     links.forEach(link => {
//       link.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);
        
//         if (targetElement) {
//           const offsetTop = targetElement.offsetTop;
//           window.scrollTo({
//             top: offsetTop,
//             behavior: 'smooth'
//           });
//         }
//       });
//     });
//   });

// // Efecto huella mouse
// document.addEventListener('DOMContentLoaded', function() {
//     const cursor = document.createElement('div');
//     cursor.classList.add('cursor');
//     document.body.appendChild(cursor);
  
//     document.addEventListener('mousemove', function(e) {
//       cursor.style.left = e.pageX + 'px';
//       cursor.style.top = e.pageY + 'px';
//     });
// });
