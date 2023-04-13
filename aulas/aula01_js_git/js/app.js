function holaMundo() {
  console.log("¡Hola Mundo! 🇦🇷");
}

function aloMundo() {
  aloBrasil = document.getElementById("app");
  aloBrasil.innerHTML += "<br><div style='text-align:center;'><strong>Olá Mundo!<strong> 🇧🇷</div><br>"
}

window.onload = function()
{
  document.onclick = function() {
    holaMundo();
  };

  aloMundo();

  var objHello = document.getElementById("hello-kraken");
  objHello.innerHTML = "Hello World! 🇺🇸";

  objHello = document.getElementsByTagName("strong")[0];
  console.log(objHello);
  objHello.onmouseover = function() {
    objHello.style.backgroundColor = "white";
    objHello.innerHTML = "Ciao Mondo 🇮🇹";
  }
  objHello.onmouseout = function() {
    objHello.style.backgroundColor = "";
    objHello.innerHTML = "George Chaves";
  }

  // USE: querySelector()
  // USE: alert()
}
