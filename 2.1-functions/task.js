'use strict';

// Задача1. Корни квадратного уравнения

function getSolutions(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    let x = [];
    let x1;
    let x2;

    if (d == 0) {
        x1 = -b / 2 * a;
        x = [x1];
    } else if (d > 0) {
        x1 = (Math.sqrt(d) - b) / (2 * a);;
        x2 = (- b - Math.sqrt(d)) / (2 * a);
        x = [x1, x2];
    }
    return {D: d, roots: x};
}

function showSolutionMessage(a, b, c) {
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + c`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

// Задача2. Журнал успеваемости

function getAverageScore(data) {      //data = {subject: data[subject]}
    let averageScore = {};            
    let count = 0;
    let total = 0;

    if (typeof data !== undefined && data || data == undefined ) {  //проверка на пустой объект
        averageScore.average = 0;
    }

    for (let subject in data) {        // AverageScore = {subject; averageScore[subject]}
        averageScore[subject] = getAverageMark(data[subject]); //средняя по предмету
        if (data.hasOwnProperty(subject)) count ++;
        total += averageScore[subject];
        averageScore.average = total / count;
    }

   return averageScore;  
}

function getAverageMark(marks) {
    let total = 0;

    if (marks.length == 0) {
        return 0;
    }

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    return total / marks.length;
}



// Задача3. Расшифровка данных

function getPersonData(secretData) {   // secretData = {aaa: 1, bbb: 0}
                                      
    for (let key in secretData) {      // {key: secretData[key], key: secretData[key]}
        secretData[key] = getDecodedValue(secretData[key]);
    }
    let person = {
        firstName: secretData.aaa,
        lastName: secretData.bbb
    };

    return person; 
}

function getDecodedValue(secret) {
    if (secret == 1) {
        return 'Эмильо';
    } else  if (secret == 0) {
        return 'Родриго';
    }
}

