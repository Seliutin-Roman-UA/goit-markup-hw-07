document
  .querySelector(".button.hero__button--position")
  .addEventListener("click", () => {
    console.log("Hello = ", document.querySelector(".hero-button-open"));
    document.getElementById("modal").className = "backdrop";
  });
document.querySelector(".button-close").addEventListener("click", () => {
  document.getElementById("modal").className = "backdrop backdrop--is-hidden";
});
