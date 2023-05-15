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
