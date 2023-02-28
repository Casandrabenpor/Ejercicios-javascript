// Formulario

(function () {
  let updateButton = document.getElementById('updateDetails');
  let cancelButton = document.getElementById('cancel');
  let favDialog = document.getElementById('favDialog');

  // El botón Actualizar abre un cuadro de diálogo modal
  updateButton.addEventListener('click', function () {
    favDialog.showModal();
  });

  // El botón de cancelar formulario cierra el cuadro de diálogo
  cancelButton.addEventListener('click', function () {
    favDialog.close();
  });

})();


//Añadir formulario
document.getElementById("addForm")
  .addEventListener('click', function (e) {
    e.preventDefault();

   

  })

