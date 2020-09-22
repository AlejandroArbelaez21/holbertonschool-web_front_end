const divideBy = (firstNumber) => {
    return function (secondNumber) {return secondNumber / firstNumber}
}

const addBy = (firstNumber) => {
    return function (secondNumber) {return firstNumber + secondNumber}
}

addBy100 = addBy(100);
addBy1000 = addBy(1000);
divideBy10 = divideBy(10);
divideBy100 = divideBy(100);
