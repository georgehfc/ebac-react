const form = document.querySelector("form");
const selectedCity = document.querySelector("select#city");
const nameInput = document.querySelector("input#username");
const passInput = document.querySelector("input#password");
const signupBtn = document.querySelector("button#signup");
const answers = document.querySelector(".answers");

// CALLBACKS
const handleSubmit = (onSubmit, onError, self) => {
  if (nameInput.value.length < 5 || passInput.value.length < 6) {
    nameInput.focus();
    return onError();
  }

  onSubmit();
};

const error = () => {
  console.log("Error!");
};

const submit = () => {
  signupBtn.style.backgroundColor = "green";
  signupBtn.style.border = "none";
  console.log("Submited");
  signupBtn.innerHTML = "<div class='loader'></div>";
  setTimeout(() => {
    signupBtn.innerHTML = "Add another";

    let table = document.querySelector('table');
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = `${nameInput.value}`
    cell2.innerHTML = `${document.querySelector('input[name=fav_language]:checked').value}`;
    cell3.innerHTML = `${selectedCity.value}`;
  }, 1000);
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Handling Submit:");
  handleSubmit(submit, error, this)
});

// PROMISES
const funcPromise = (condition) => {
  return new Promise((resolve, reject) => {
    // console.log('New Promise Returned:');
    if (!condition) {
      return reject();
    }
    resolve();
  });
};

funcPromise(false)
  .then(() => {
    // console.log('Promise ok');
  })
  .catch(() => {
    // console.log('Promise error');
  });

// ASYNC PROMISE
const funcAsyncPromise = async (condition) => {
  // console.log('New (Async) Promise Returned:');
  if(!condition) {
    throw new Error('Condition is set to false.');
  }
  return true;
};

funcAsyncPromise(true)
  .then(() => {
    // console.log('(Async) Promise ok');
  })
  .catch((error) => {
    // console.log('(Async) Promise error');
    // console.log(error);
  });

// LOOPS
const numbers = [1,2,3,4,5];

const numberObjects = numbers.map((current, index, array) => {
  return {
    number: current,
    index: index,
    array: array };
});

// console.log("Loops: ");
// console.log(numberObjects);
