let dropdownBtn2 = document.getElementById("drop-button2");
let dropdownMenu2 = document.getElementById("dropdown-content2");

let toggleDropdown2 = function () {
  dropdownMenu2.classList.toggle("show");
};

dropdownBtn2.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown2();
});

document.documentElement.addEventListener("click", function () {
  if (dropdownMenu2.classList.contains("show")) {
    toggleDropdown2();
  }
});