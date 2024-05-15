// Найти элементы
var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("open-modal");
var closeModalBtns = document.querySelectorAll(
  ".geo-location-window-button, .close"
);

// Открыть модальное окно при клике на кнопку
openModalBtn.onclick = function () {
  modal.style.display = "block";
};

// Закрыть модальное окно при клике на кнопку закрытия или за его пределами
closeModalBtns.forEach(function (btn) {
  btn.onclick = function (event) {
    if (
      event.target.classList.contains("close") ||
      event.target.classList.contains("geo-location-window-button")
    ) {
      modal.style.display = "none";
    }
  };
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function showMenu() {
  var submenu = document.getElementById("submenu");
  submenu.style.display = "block";
}

function hideMenu() {
  var submenu = document.getElementById("submenu");
  submenu.style.display = "none";
}

document.addEventListener("scroll", function () {
  const heroText = document.querySelector(".hero-text");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 400) {
    heroText.style.color = "white";
  } else {
    heroText.style.color = "#83caf3";
  }
});
