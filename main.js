const button = document.querySelector(".open-btn");
const container = document.querySelector(".container-body");
button.addEventListener("click", function() {
  container.classList.toggle("container-transform");
});

const btnMenu = document.querySelector(".menu-btn");
const listMenu = document.querySelector(".list-menu");

btnMenu.addEventListener("click", function() {
  listMenu.classList.toggle("hidden");
  listMenu.classList.toggle("flex");
});

const contaierSpinner = document.getElementById("container-spinner");
window.addEventListener("load", () => {
  contaierSpinner.style.display = "flex";
  setTimeout(() => {
    contaierSpinner.style.display = "none";
  }, 1000);
})