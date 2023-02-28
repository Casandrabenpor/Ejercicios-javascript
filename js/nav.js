

const burguer = document.getElementById("burguer-button");
const menu = document.getElementsByClassName("menu");
burguer.addEventListener("click", () => {
 menu[0].classList.toggle("menu-visible");
});
  