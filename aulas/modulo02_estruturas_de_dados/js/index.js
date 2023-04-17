function onSubmit(event) {
  event.preventDefault();

  console.log("Dados eviados sem apagar preenchimento!");
}

const form = document.querySelector('form');
// ENVIANDO onSubmit COMO PARÂMETRO
form.addEventListener('submit', onSubmit);
