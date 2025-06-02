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
