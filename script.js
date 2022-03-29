const soso = document.getElementById("face")
let i = 45;
soso.addEventListener("click", function () {
    soso.style.transform = 'rotate('+i+'deg)';
    if (i<360) {
      i+=45;
    }
    else {
      i-=315;
    }
  }
)