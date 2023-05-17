// Anonymous function:
// function () {}

// Arrow function:
// () => {}

// Named function:
function name() {
  return arguments
}
console.log(name("Arguments!"));

const nameArrow = (firstName) => { // PARAMETER
  // Nested function:
  // console.log(arguments); // NOT DEFINED
  const addToName = (name) => name + " Chaves";

  return addToName(firstName) // ARGUMENT
}
console.log(nameArrow("George"));

// Recursive function:
const loop = (number) => {
  console.log(number);
  if (number === 10) {
    return number;
  }
  loop(++number);
}
loop(1);

// Immediate function:
(() => {
  console.log('executed.exe\nIIFE: Immediately Invoked Function Expression');

  // Object:
  const qwe = {
    // Methods:
    name: function (firstName) {
      console.log(arguments);
      console.log(this);
    },
    nameArrow: () => {
      console.log(arguments); // ReferenceError: arguments is not defined
      console.log(this);
    }
  }

  qwe.name("qwe");
  qwe.nameArrow();
})()

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
