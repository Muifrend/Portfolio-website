const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.getElementsByClassName("hamburger");
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    soso.style.display = 'inline';
  } else {
    menu.classList.add("showMenu");
    soso.style.display = 'none';
  }
}
hamburger[0].addEventListener("click", toggleMenu);
menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)
const soso = document.getElementById("face")
let i = 0.125;
soso.addEventListener("click", function () {
    soso.style.transform = 'rotate('+i+'turn)';
      i+=0.125;
  }
)