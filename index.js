// Newsletter
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Obrigado por se inscrever!');
});

// Dark Mode
const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Contact
document.getElementById('contact').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Pagina em construção!');
});

const stars = document.querySelectorAll('.star');
const comment = document.getElementById('comment');
const submit = document.getElementById('submit');
const result = document.getElementById('result');

let selectedRating = 0;

// Efeito hover
stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    resetStars();
    const value = parseInt(star.getAttribute('data-value'));
    highlightStars(value);
  });

  star.addEventListener('mouseout', resetStars);

  star.addEventListener('click', () => {
    selectedRating = parseInt(star.getAttribute('data-value'));
    highlightStars(selectedRating);
  });
});

function highlightStars(rating) {
  stars.forEach(star => {
    if (parseInt(star.getAttribute('data-value')) <= rating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}

function resetStars() {
  stars.forEach(star => {
    star.classList.remove('hovered');
  });
}

// Envio da avaliação
submit.addEventListener('click', () => {
  if (selectedRating === 0) {
    alert('Por favor, selecione uma nota!');
    return;
  }

  const userComment = comment.value.trim();

  result.style.display = 'block';
  result.innerHTML = `
    <strong>Avaliação enviada!</strong><br>
    Nota: ${selectedRating} estrela(s)<br>
    Comentário: ${userComment ? userComment : 'Nenhum comentário'}
  `;

  // Resetar o formulário
  selectedRating = 0;
  highlightStars(0);
  comment.value = '';
});
