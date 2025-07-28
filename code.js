document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.portfolio-card');
  if (cards.length < 3) return;

  let current = 0;

  function updateCards() {
    cards.forEach((card) => {
      card.classList.remove('active', 'left-blur', 'right-blur');
    });

    const total = cards.length;
    const prev = (current - 1 + total) % total;
    const next = (current + 1) % total;

    cards[prev].classList.add('left-blur');
    cards[current].classList.add('active');
    cards[next].classList.add('right-blur');
  }

  function autoRotate() {
    current = (current + 1) % cards.length;
    updateCards();
  }

  updateCards(); // mostra os primeiros

  // Gira a cada 4 segundos
  setInterval(autoRotate, 7000);
});


document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});