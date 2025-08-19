const dark = document.querySelector(".dark-bgc"),
      burger = document.querySelector(".burger"),
      center = document.querySelector(".center")
      // cancenter
burger.addEventListener("click", function() {
  center.style.left = "0";
  dark.style.display = "block"
})
function cancelBurger() {
  center.style.left = "-100%";
  dark.style.display = "none"
}
// cancel.addEventListener("click", cancelBurger)
dark.addEventListener("click", cancelBurger)

