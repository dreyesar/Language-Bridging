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

  /* ===============================
     Agradecimientos - Carrusel
     (1 visible siempre + flechas centradas en el texto)
     =============================== */
  const carousel = document.querySelector('.agradecimientos-carousel');

  if (carousel) {
    const track = carousel.querySelector('.carousel-track');
    const cards = Array.from(carousel.querySelectorAll('.testimonio-card'));
    const btnPrev = carousel.querySelector('.carousel-btn.prev');
    const btnNext = carousel.querySelector('.carousel-btn.next');

    let index = 0;

    // 1 tarjeta visible siempre
    const getPerView = () => 1;

    // Ancho del paso (tarjeta + gap)
    const getStepWidth = () => {
      if (!cards.length) return 0;
      const gap = parseFloat(getComputedStyle(track).gap || 0);
      const cardWidth = cards[0].getBoundingClientRect().width;
      return cardWidth + gap;
    };

    const clampIndex = () => {
      const perView = getPerView();
      const maxIndex = Math.max(0, cards.length - perView);
      index = Math.min(Math.max(index, 0), maxIndex);
    };

    const updateButtons = () => {
      const perView = getPerView();
      const maxIndex = Math.max(0, cards.length - perView);
      btnPrev.disabled = index <= 0;
      btnNext.disabled = index >= maxIndex;
    };

    // Posiciona las flechas a la mitad del TEXTO del testimonio visible
    const positionArrowsToText = () => {
      if (!cards.length || !btnPrev || !btnNext) return;

      const activeCard = cards[index];
      if (!activeCard) return;

      const textEl = activeCard.querySelector('.testimonio-texto') || activeCard;

      const carouselRect = carousel.getBoundingClientRect();
      const textRect = textEl.getBoundingClientRect();

      // Centro vertical del texto, relativo al carrusel
      let centerY = (textRect.top + (textRect.height / 2)) - carouselRect.top;

      // Pequeños límites para que nunca queden “muy arriba/abajo”
      const minY = 50;
      const maxY = carouselRect.height - 50;
      centerY = Math.max(minY, Math.min(centerY, maxY));

      btnPrev.style.top = `${centerY}px`;
      btnNext.style.top = `${centerY}px`;
    };

    const render = () => {
      const step = getStepWidth();
      track.style.transform = `translateX(${-index * step}px)`;
      updateButtons();

      // Espera un frame para medir con el layout ya aplicado
      requestAnimationFrame(positionArrowsToText);
    };

    btnPrev.addEventListener('click', () => {
      index -= 1;
      clampIndex();
      render();
    });

    btnNext.addEventListener('click', () => {
      index += 1;
      clampIndex();
      render();
    });

    window.addEventListener('resize', () => {
      clampIndex();
      render();
    });

    // Init
    clampIndex();
    render();
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
