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

// Modal
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  const confirmBtn = document.getElementById('confirm-btn');
  const cancelBtn = document.getElementById('cancel-btn');

  let selectedPlan = '';

  document.querySelectorAll('.select-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedPlan = btn.getAttribute('data-plan');
      modalMessage.textContent = `Você selecionou o Plano ${selectedPlan}. Deseja confirmar?`;
      modal.style.display = 'flex';
    });
  });

  confirmBtn.addEventListener('click', () => {
    alert(`Plano ${selectedPlan} confirmado!`);
    modal.style.display = 'none';
  });

  cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

