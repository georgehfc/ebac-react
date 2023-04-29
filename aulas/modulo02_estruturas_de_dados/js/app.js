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
      h1[0].innerHTML='';
      h1[0].innerHTML+=calc.placeholder+e.currentTarget.innerHTML;
    } else {
      calc.placeholder='Invalid expression...';
      h1[0].innerHTML='Welcome to <em>Calculator</em>';
    }
  }

  function isNumeric(value) {
    return /^-?\d+$/.test(value);
  }

  function calculateResult(e) {
    if (h1[0].innerHTML==='Welcome to <em>Calculator</em>') {
      calc.placeholder='Invalid expression...';
    } else {
      calc.value=compute(h1[0].innerHTML, calc.value);
      h1[0].innerHTML='Welcome to <em>Calculator</em>';
      calc.placeholder='Calculate everything';
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

  function resetCalc() {
    document.reload();
  }

  comma.addEventListener('click', () => calc.value+=',');

  equals.addEventListener('click', (e) => (calculateResult(e)));
  document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      if (/\(\d+\)|\d+[-+/*]\d+/.test(calc.value)) {
        e.preventDefault();

        result = eval((calc.value).replace(',','.'));
        calc.value = result;

        document.getElementById("calc").click();
      } else {
        calc.value = '';
      }
    }
  });
}
