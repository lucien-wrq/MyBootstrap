
// Script pour le carousel 

  const carousel = document.getElementById('carousel');
  const images = carousel.querySelectorAll('img');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });

// Script pour le menu de navigation

  const navbarToggle = document.getElementById('navbarToggle');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('closeSidebar');

  // Ouvrir la sidebar
  navbarToggle.addEventListener('click', () => {
      sidebar.classList.add('open');
  });

  // Fermer la sidebar
  closeSidebar.addEventListener('click', () => {
      sidebar.classList.remove('open');
  });
