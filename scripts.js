document.addEventListener("scroll", function () {
  const goToTopButton = document.querySelector(".go-to-top");
  if (window.scrollY > 100) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
});

document.querySelector(".go-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
