const dark = document.querySelector(".dark-bgc"),
      burger = document.querySelector(".burger"),
      menu = document.querySelector(".menu")
      // cancenter
burger.addEventListener("click", function() {
  menu.style.right = "0";
  dark.style.display = "block"
})
function cancelBurger() {
  menu.style.right = "-100%";
  dark.style.display = "none"
}
//cancel.addEventListener("click", cancelBurger)
dark.addEventListener("click", cancelBurger)
c
