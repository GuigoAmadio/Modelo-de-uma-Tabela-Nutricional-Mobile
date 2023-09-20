function togglemode() {
  var x = document.getElementById("informacoes");
  var butt = document.getElementById("buttontop");
  var magem = document.getElementById("ma");

  if (x.classList.contains("slide-in")) {
    x.classList = "slide-out";
    butt.classList = "buttontop blur";
    magem.classList = "blur";
  } else {
    x.classList = "slide-in";
    butt.classList = "buttontop";
    magem.classList = "";
  }
}

function modifyHeart() {
  var img = document.getElementById("ous");

  if (img.classList.contains("oe")) {
    img.classList = "buttonstop ous";
  } else {
    img.classList = "buttonstop oe";
  }
}

function modifyArrow() {
  var imgg = document.getElementById("oas");

  if (imgg.classList.contains("ou")) {
    imgg.classList = "buttonstop oi";
  } else {
    imgg.classList = "buttonstop ou";
  }
}
