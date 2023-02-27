// let navButton = document.getElementById('navbarToggle');

// let navbarNav = document.getElementById('navbarNav');

// let open = function () {
//     navbarNav.style.display = 'block';
//     close.style.display = 'block';
// };

// let hide = function () {
//     navbarNav.style.display = 'none';
//     close.style.display = 'none';
// };

// navButton.addEventListener('click', open);
// close.addEventListener('click', hide);

const btnMenu = document.querySelector("#navbarToggle");
const menu =  document.querySelector("#navbarNav");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});
