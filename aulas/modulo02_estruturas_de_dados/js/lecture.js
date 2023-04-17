// ONCLICK EVENT
// var button = document.getElementById("grito");
// button.onclick = function()
// {
//   window.alert("BOOM!");
// }

// ------

// ADD LISTENER
const button = document.getElementById('button');

button.addEventListener('click', () => {
  window.alert("WELCOME! 💥💥💥");
});

// ------

// ADD EVENT
const openModalEvent = new Event('openModal');
document.addEventListener('openModal', (e) =>
{
  console.log(e.detail.modalName);
});

window.addEventListener("scroll", (e) =>
{
  if (window.scrollY === 0) {
    const openTopoPagEvent = new CustomEvent("openModal", {
      detail: { modalName: "Topo da página!" }
    });
    document.dispatchEvent(openTopoPagEvent);
  }
  if (window.scrollY > document.documentElement.scrollHeight - document.documentElement.clientHeight - 1) {
    const openFundoPagEvent = new CustomEvent("openModal", {
      detail: {modalName: "Fundo da página!" }
    });
    document.dispatchEvent(openFundoPagEvent);
  }
});

// ------

// ADD CUSTOM EVENT
const openCustomEvent = new CustomEvent('openModal',
  {
    detail: {
      modalName: 'Custom Event in action!'
    }
  }
);

function openModalHandler(event) {
  console.log('The modal is: ' + openCustomEvent.detail.modalName);
};

document.addEventListener('openModal', openModalHandler());
// document.dispatchEvent(openCustomEvent);

// ------

// EVENT BUBBLING
const pai = document.getElementById('pai');
const filho = document.getElementById('filho');
const neto = document.getElementById("espirito-santo");
pai.addEventListener('click', () =>
  console.log("pai foi clicado")
);
filho.addEventListener('click', () =>
  console.log("filho foi clicado")
);
neto.addEventListener('click', () =>
  console.log("espírito santo foi clicado")
);



// DISPATCH EVENT
function simulateClick() {
  // Cria um evento que imita o click
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  const checkbox_input = document.getElementById('checkbox');
  const checkmark_label = document.getElementById('checkmark');
  // dispara o evento
  const cancelled = !checkbox_input.dispatchEvent(event);
  /*
  Se o elemento ja tiver um evento atrelado a ele e chamar a
  função event.preventDefault() simular eventos nao funcionará
  */
  if (cancelled) {
    console.log("cancelled");
  } else {
    console.log("not cancelled");
  }
}
