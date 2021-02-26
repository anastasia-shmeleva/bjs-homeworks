'use strict';
function getResult(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    let x = [];
    let x1;
    let x2;

    if (d == 0) {
        x1 = - b / (2 * a);
        x = [x1];
    } else if (d > 0) {
        x2 = (- b - Math.sqrt(d)) / (2 * a);
        x1 = (Math.sqrt(d) - b) / (2 * a);
        x = [x1, x2];
    } 

    return x;
}

function getAverageMark(marks){
    let total;
    let averageMark;

    if (marks.length == 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log("Внимание! Оценок больше 5.");
        marks = marks.slice(0, 5);
    } 

    total = marks.reduce(function(a,b) {
        return a + b;
    });
    averageMark = total / marks.length;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
 //   let age = new Date().getFullYear() - dateOfBirthday.getFullYear();

    if (new Date().getFullYear() - dateOfBirthday.getFullYear() > 17) {
        return "Не желаете ли олд-фэшн, " + name + "?"
    } else {
        return "Сожалею, " + name + ", но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!"   
    }
}
