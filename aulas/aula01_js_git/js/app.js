function holaMundo() {
  // USE: console.log()
  console.log("¡Hola Mundo! 🇦🇷");
}

function getFocus() {
  let focus = document.getElementById("focus");
  // USE: .focus()
  focus.focus();
  focus.innerHTML = "<h4>Hallo Welt 🇩🇪</h4>";
  // USE: .value
  document.getElementById("grito").value = "🇸🇦 مرحبا بالعالم";
}

function loseFocus() {
  let blur = document.getElementById("focus");
  blur.blur();
  // USE: .blur()
  blur.innerHTML = "Hallo Welt 🇩🇪 ✌🏼 :P";
}

function aloMundo() {
  aloBrasil = document.getElementById("app");
  // USE: getElementById
  aloBrasil.innerHTML += "<br><div style='text-align:center;'><strong>Olá Mundo!<strong> 🇧🇷</div><br>"
}

window.onload = function()
{
  document.onclick = function() {
    holaMundo();
  };

  aloMundo();

  var objHello = document.getElementById("hello-kraken");
  // USE: innerHTML
  objHello.innerHTML = "Hello World! 🇺🇸";

  // USE: .onmouseover
  objHello = document.getElementsByTagName("strong")[0];
  objHello.onmouseover = function() {
    objHello.style.backgroundColor = "white";
    objHello.innerHTML = "Ciao Mondo 🇮🇹";
  }
  objHello.onmouseout = function() {
    objHello.style.backgroundColor = "";
    objHello.innerHTML = "George Chaves";
  }

  // USE: createElement()
  const helloDiv = document.createElement("div");
  helloDiv.id = "helloDiv";
  helloDiv.innerHTML = "Selam Dünya 🇹🇷";
  helloDiv.innerHTML += "<br>☾"
  document.body.appendChild(helloDiv);

  // USE: querySelector()
  document.querySelector('option[value=hello]').text = 'こんにちは世界 🇯🇵';

  // USE: page-title
  document.title = "Γειά σου Κόσμε 🇬🇷";

  var objPop = document.getElementById("grito");
  objPop.onclick = function()
  {
    // USE: alert()
    window.alert("你好世界 🇨🇳");
  }
}
