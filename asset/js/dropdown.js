let dropdownBtn = document.getElementById("drop-button1");
let dropdownMenu = document.getElementById("dropdown-content1");

let toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
};

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});