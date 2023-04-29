window.onload = function()
{
  const h1 = document.querySelectorAll('h1');
  h1[0].innerHTML='Welcome to <em>Calculator</em>';

  const numberButtons = document.querySelectorAll("div.number");
  numberButtons.forEach(numberButtons => numberButtons.addEventListener('click', (e) => calc.value+=e.currentTarget.innerHTML));
  console.log(numberButtons);

  const operationButtons = document.querySelectorAll("div.operation");
  operationButtons.forEach(operationButtons => operationButtons.addEventListener('click', (e) => (
    calc.placeholder=calc.value,
    displayOperands(e),
    calc.value=''
    )));

  function displayOperands(e) {
    console.log(calc.value);
    if (calc.value) {
      h1[0].innerHTML = '';
      h1[0].innerHTML += calc.placeholder + e.currentTarget.innerHTML;
    } else {
      calc.placeholder = 'Invalid expression...';
      h1[0].innerHTML = 'Welcome to <em>Calculator</em>';
    }
  }

  function calculateResult(e) {
    if (h1[0].innerHTML==='Welcome to <em>Calculator</em>') {
      calc.value = '';
      calc.placeholder = 'Invalid expression...';
    } else {
      calc.value = compute(h1[0].innerHTML, ccalc.value.replace(',', '.'));
      h1[0].innerHTML = 'Welcome to <em>Calculator</em>';
      calc.placeholder = 'Calculate everything';
    }
  }

  function compute(firstOperand, secondOperand) {
    switch (firstOperand.slice(-1)) {
      case '+':
        return Number(firstOperand.slice(0, -1)) + Number(secondOperand);
      case '-':
        return Number(firstOperand.slice(0, -1)) - Number(secondOperand);
      case '×':
        return Number(firstOperand.slice(0, -1)) * Number(secondOperand);
      case '÷':
        return Number(firstOperand.slice(0, -1)) / Number(secondOperand);
      case '/':
        return Number(firstOperand.slice(0, -1)) / Number(secondOperand);
      default:
        console.log('Refresh to start over');
    }
  }

  comma.addEventListener('click', () => calc.value+=',');

  equals.addEventListener('click', (e) => (calculateResult(e)));

  document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      calc.value = compute(h1[0].innerHTML, calc.value.replace(',', '.'));
      h1[0].innerHTML = 'Welcome to <em>Calculator</em>';
      calc.placeholder = 'Calculate everything';
      document.getElementById("calc").click();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      window.location.reload();
    }
  })
}
