// Dark Mode
const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
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

