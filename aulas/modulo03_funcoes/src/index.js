// CALLBACKS
const form = document.querySelector("form");

const handleSubmit = (onSubmit, onError, self) => {
  const nameInput = self.querySelector("input#username");
  console.log(nameInput.value.length);

  if (nameInput.value.length < 5) {
    return onError();
  }

  onSubmit();
};

const error = () => {
  console.log("Error!");
};
const submit = () => {
  console.log("Submited");
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  handleSubmit(submit, error, this)
});

// PROMISES
const funcPromise = (condition) => {
  return new Promise((resolve, reject) => {
    if (!condition) {
      return reject();
    }

    console.log('promise');

    resolve();
  });
};

funcPromise(false)
  .then(() => {
    console.log('ok');
  })
  .catch(() => {
    console.log('error');
  });

// ASYNC PROMISE
const funcAsyncPromise = async(condition) => {
  if(!condition) {
    throw new Error('Condition is set to false.');
  }

  return true;
};

funcAsyncPromise(false)
  .then(() => {
    console.log('async ok');
  })
  .catch((error) => {
    console.log('async error');
    console.log(error);
  });

// POKéMON API
const loadPokemon = (id, cb) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json())
  .then(data => {
    cb(data);
  });
};

loadPokemon(4, (pokemon) => {
  console.log(pokemon);
});
