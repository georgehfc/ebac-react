const form = document.querySelector("form");
const selectedCity = document.querySelector("select#city");
const nameInput = document.querySelector("input#username");
const passInput = document.querySelector("input#password");
const signupBtn = document.querySelector("button#signup");
const answers = document.querySelector(".answers");

// CALLBACKS
const handleSubmit = (onSubmit, onError, self) => {
  if (passInput.value.length < 6) {
    passInput.focus();
    return onError();
  }

  onSubmit();
};

const error = () => {
  alert("Passwords must contain at least 6 characters!");
};

const submit = () => {
  signupBtn.style.backgroundColor = "#04AA6D";
  signupBtn.style.border = "none";
  console.log("Submited");
  signupBtn.innerHTML = "<div class='loader'></div>";
  setTimeout(() => {
    signupBtn.innerHTML = "Add another";

    let table = document.querySelector('table');
    let row = table.insertRow();

    (document.querySelector('.agreement input').checked) ? row.insertCell().innerHTML = `${nameInput.value}` : row.insertCell().innerHTML = `${nameInput.value} ☠️`;
    (document.querySelector('input[name=fav_language]:checked')) ? row.insertCell().innerHTML = `${document.querySelector('input[name=fav_language]:checked').value}` : row.insertCell().innerHTML = '-';
    (selectedCity.value) ? row.insertCell().innerHTML = `${selectedCity.value}` : row.insertCell().innerHTML = '-';
  }, 1000);
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log("Handling Submit:");
  handleSubmit(submit, error, this)
});
