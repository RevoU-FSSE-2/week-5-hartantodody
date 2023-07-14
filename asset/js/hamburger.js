let hamBtn = document.getElementById("hamburger-button");
let hamMenu = document.getElementById("hamburger-menu");

let toggleHam = function () {
  hamMenu.classList.toggle("show");
};

hamBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleHam();
});

document.documentElement.addEventListener("click", function () {
  if (hamMenu.classList.contains("show")) {
    toggleDropdown();
  }
});