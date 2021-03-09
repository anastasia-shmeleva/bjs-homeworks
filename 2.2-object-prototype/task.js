//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function isPalindrome() {
    let string = this.toLowerCase().replace(/\s/g, '').split(''); //удалить пробелы и строку сделать массивом символов split('')
    console.log(string);
    console.log(string.reverse());
    return string.join('') === string.reverse().join(''); //все символы в строку join('')
}

function getAverageMark(marks) {
    let total = 0;
    
    if (marks.length == 0) {
        return 0;
    }

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
 
    let roundedAverage = Math.round(total / marks.length);
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = Date.now();
    let date = new Date(birthday);
    birthday = +date;
    let diff = now - birthday;
    let age = diff / (365.25 * (60 * 60 * 24 * 1000)); //31557600000;
    // 60 sec * 60 min * 24 h * 1000 mill
    return age > 18;
}
