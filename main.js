let btnAbrirModal = document.getElementById('btn-abrir'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnClose = document.getElementById('btn-close');

btnAbrirModal.addEventListener('click', function() {
  overlay.classList.add('active');
});
btnClose.addEventListener('click', function() {
  overlay.classList.remove('active');
});