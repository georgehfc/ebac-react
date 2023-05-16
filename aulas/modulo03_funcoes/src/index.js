// CALLBACKS
const form = document.querySelector("form");

const handleSubmit = (onSubmit, onError, self) => {
  const nameInput = self.querySelector("input#username");
  const passInput = self.querySelector("input#password");

  if (nameInput.value.length < 5 || passInput.value.length < 6) {
    nameInput.focus();
    return onError();
  }

  onSubmit(self);
};

const error = () => {
  console.log("Error!");
};

const submit = (self) => {
  self.querySelector("button#signup").style.backgroundColor = "green";
  self.querySelector("button#signup").style.border = "none";
  console.log("Submited");
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
