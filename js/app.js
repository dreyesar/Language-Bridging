// ===============================
// MOBILE MENU TOGGLE
// ===============================
document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // ===============================
  // ACTIVE NAV LINK BASED ON URL
  // ===============================
  const path = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (
      href === path ||
      (path === '' && href === 'index.html') ||
      (href.startsWith('#') && path.startsWith('index'))
    ) {
      a.classList.add('active');
    }
  });

  // ===============================
  // SMOOTH SCROLL FOR ANCHORS
  // ===============================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===============================
  // "CONTINUAR LEYENDO" TOGGLE TEXT
  // ===============================
  const toggleBtn = document.getElementById("toggleTextBtn");
  const hiddenContent = document.getElementById("hiddenContent");

  if (toggleBtn && hiddenContent) {
    toggleBtn.addEventListener("click", function () {

      const isHidden = hiddenContent.style.display === "none" || hiddenContent.style.display === "";

      if (isHidden) {
        hiddenContent.style.display = "block";
        toggleBtn.textContent = "Mostrar menos";
      } else {
        hiddenContent.style.display = "none";
        toggleBtn.textContent = "Continuar leyendo";

        // desplazamiento suave hacia el botón
        window.scrollTo({ 
          top: toggleBtn.offsetTop - 80, 
          behavior: 'smooth' 
        });
      }
    });
  }

});

