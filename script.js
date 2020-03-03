class Calculator {
  constructor() {
    this.firstNumber = "";
    this.secondNumber = "";
    this.operation = undefined;
    this.isfirstNum = true;
    this.DisplayDivnum = null;
  }

  appendNumber(number) {
    if (this.isfirstNum) {
      this.firstNumber += number;
      this.showDisplay(this.firstNumber);
    } else {
      this.secondNumber += number;
      this.showDisplay(this.secondNumber);
    }
  }

  chooseOperation(operation) {
    if (0 == this.firstNumber.length) {
      return;
    }
    this.isfirstNum = false;
    this.operation = operation;
    this.showDisplay("");
  }

  compute() {
    let result;
    const firstNum = parseFloat(this.firstNumber);
    const secondNum = parseFloat(this.secondNumber);

    switch (this.operation) {
      case "+":
        result = firstNum + secondNum;
        break;
      case "-":
        result = firstNum - secondNum;
        break;
      case "*":
        result = firstNum * secondNum;
        break;
      case "÷":
        result = firstNum / secondNum;
        break;
      default:
        return;
    }
    this.clear();
    this.showDisplay(result);
  }
  clear() {
    this.firstNumber = "";
    this.secondNumber = "";
    this.operation = undefined;
    this.isfirstNum = true;
    this.showDisplay("");
  }

  showDisplay(input) {
    this.DisplayDivnum.innerText = input;
  }

  init() {
    this.DisplayDivnum = document.getElementsByClassName("DisplayDiv")[0];
    // console.log(this.DisplayDivnum[0]);

    const numberButtons = document.getElementsByClassName("number-button");

    for (let i = 0; i < numberButtons.length; i++) {
      const element = numberButtons[i];
      element.addEventListener("click", () => {
        let number = element.getAttribute("data-number");
        this.appendNumber(number);
      });
    }

    const operationButtons = document.getElementsByClassName("operation");

    for (let i = 0; i < operationButtons.length; i++) {
      const element = operationButtons[i];
      element.addEventListener("click", () => {
        let operand = element.getAttribute("data-operation");
        this.chooseOperation(operand);
      });
    }
    const equalsButton = document.getElementsByClassName("equals")[0];

    equalsButton.addEventListener("click", () => {
      this.compute();
    });

    const allClearButton = document.getElementsByClassName("clear")[0];

    allClearButton.addEventListener("click", () => {
      this.clear();
    });
  }
}

var calculator = new Calculator();

calculator.init();
