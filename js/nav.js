



//función acepta una ID como parámetro y verifica si el navegador puede encontrar un elemento con esa ID.
function muestra_oculta(id) {
    if (document.getElementById) {
      let el = document.querySelector('#' + id);
      //La propiedad de estilo 'display' tiene dos valores posibles: 'block' (para mostrarlo), 'none' (para ocultarlo)
      el.style.display = (el.style.display == 'none') ? 'block' : 'none';
    }
  }
  
  window.onload = function () {
    muestra_oculta('navbarNav');
  }

// const btnMenu = document.querySelector("your-selector"); // obtenerá el botón 
// const menu =  document.querySelector("#navbarNav"); // obtendrá el elemento de menú

// btnMenu.addEventListener("click", function(){
//     menu.classList.toggle("mostrar");
// });

  