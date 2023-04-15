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
  window.alert("BOOM!");
});

// ------

// ADD EVENT
const openModalEvent = new Event('openModal');
document.addEventListener('openModal',  () =>
{
  window.alert("WELCOME! 💥💥💥");
});
// document.dispatchEvent(openModalEvent);

// ------

// ADD CUSTOM EVENT
const openCustomEvent = new CustomEvent('openModal',
  {
    detail: {
      modalName: 'faq'
    }
  }
);

function openModalHandler(event) {
  console.log('The modal is: ' + openCustomEvent.detail.modalName);
};

document.addEventListener('openModal', openModalHandler);
document.dispatchEvent(openCustomEvent);

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
