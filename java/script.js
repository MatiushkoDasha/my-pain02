const dark = document.querySelector(".dark-bgc"),
      burger = document.querySelector(".burger"),
      center = document.querySelector(".center"),
      cancel = document.querySelector(".cancel")

burger.addEventListener("click", function() {
  center.style.right = "0";
  dark.style.display = "block"
})
function cancelBurger() {
  center.style.right = "-100%";
  dark.style.display = "none"
}
cancel.addEventListener("click", cancelBurger)
dark.addEventListener("click", cancelBurger)
