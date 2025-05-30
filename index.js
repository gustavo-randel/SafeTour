// Mensagem ao clicar em "Leia mais"
document.querySelectorAll('.articles a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    alert('Post em desenvolvimento...');
  });
});

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
