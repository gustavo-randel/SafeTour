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
