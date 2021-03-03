'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    let percent2 = parseInt(percent);
    let contribution2 = parseInt(contribution);
    let amount2 = parseInt(amount);

    if (Number.isNaN(percent2) || percent < 0) {
        return `Параметр \'Процентная ставка\' содержит неправильное значение \'${percent}\'`;
    } else if (Number.isNaN(contribution2) || contribution < 0) {
        return `Параметр \'Начальный взнос\' содержит неправильное значение \'${contribution}\'`;
    } else if (Number.isNaN(amount2) || amount < 0) {
        return `Параметр \'Общая стоимость\' содержит неправильное значение \'${amount}\'`;
    } else if (date < new Date() || date.getFullYear() == new Date().getFullYear()) {
        return 'Параметр \'Срок ипотеки\' содержит неправильную дату';
    }

    let debitBody = amount2 - contribution2; //тело кредита
    let months = (date.getFullYear() - new Date().getFullYear()) * 12;  
    let p = percent2 / 12 / 100; //1/12 процентной ставки (от 0 до 1)
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