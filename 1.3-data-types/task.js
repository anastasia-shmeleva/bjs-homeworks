'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    // percent = Number(percent);
    // contribution = parseInt(contribution);
    // amount = parseInt(percent);

    // if (typeof(percent) !== 'number') {
    //     return "Параметр \'Процентная ставка\' содержит неправильное значение" + " " + percent;
    // }

    let debitBody = amount - contribution; //тело кредита
    let months = (date.getFullYear() - new Date().getFullYear()) * 12;  
    let p = percent / 12 / 100; //1/12 процентной ставки (от 0 до 1)
    let monthlyPayment = debitBody * (p + p / ((Math.pow(1 + p, months)) - 1)); 
    let totalAmount = monthlyPayment * months;
    totalAmount = +totalAmount.toFixed(2);

    return totalAmount;
}

function getGreeting(name) {
    if (name === undefined || name === "") {
        name = "Аноним";
    } 

    console.log(`Привет, мир! Меня зовут ${name}.`);
    let greeting = `Привет, мир! Меня зовут ${name}.`;
    return greeting;
}