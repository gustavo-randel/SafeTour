// Dark Mode
const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Contact
document.getElementById('contact').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Deseja aparecer em nossas recomendações, em prioridade?.\nVenha ampliar o alcance do seu restaurante, loja, hotel ou pousada conosco!\nEnvie um e-mail para: safetour@contact.br com nome de sua empresa, página web, mídias sociais, localização e caso seja elegível, retornaremos o contato.\nA equipe SafeTour agradece a preferência!');
});
