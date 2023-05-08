// Anonymous function:
// function () {}

// Arrow function:
// () => {}

// Named function:
function name() {}
const nameArrow = (firstName) => { // PARAMETER
  // Nested function:
  const addToName = (name) => name + "Chaves";

  return addToName(firstName) // ARGUMENT
}

console.log(nameArrow("George"));
