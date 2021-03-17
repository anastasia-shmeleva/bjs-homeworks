'use strict';

// Задача 1. Печатное издание
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    fix() {
        if ((this.state = 1.5 * this.state) > 100) return this.state = 100;
    }
    
    set state(state) {
        if (state < 0) {
            return this.newState = 0;
        } else if (state > 100) {
            return this.newState = 100;
        } else return this.newState = state;
    }

    get state() {
        return this.newState;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "detective";
    }
}

// const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

// console.log(picknick.author); //"Аркадий и Борис Стругацкие"
// picknick.state = 10;
// console.log(picknick.state); //10
// picknick.fix();
// console.log(picknick.state); //15


// Задача 2. Библиотека
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) return this.books.push(book)
    }
// this.books = [
//     {author: "Артур Конан Дойл", name: "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", releaseDate: 2019, pagesCount: 1008}
//     {author: "Аркадий и Борис Стругацкие", name: "Пикник на обочине", releaseDate: 1972, pagesCount: 168}
//     {author: "Герберт Уэллс", name: "Машина времени", releaseDate: 1895, pagesCount: 138}
//     {name: "Мурзилка", releaseDate: 1924, pagesCount: 60}
// ]
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) return this.books[i];
        }
        return null
    }

    giveBookByName(bookName) {
        let searchedBook;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) return searchedBook = this.books.splice(i, 1)[0];
        }
        return null;
    }
}


// const library = new Library("Библиотека имени Ленина");

// library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
// library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));

// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3


// Задача 3. Классный журнал
class StudentLog {
    constructor(name) {
        this.name = name;
        this.journal = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (this.journal.hasOwnProperty(subject) !== true) {
            this.journal[subject] = [];
        }

        if (grade >= 1 && grade <= 5) {
            this.journal[subject].push(grade);
            return this.journal[subject].length;
        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            return this.journal[subject].length;
        }
    }

    getAverageBySubject(subject) {
        let total = 0;

        if (this.journal.hasOwnProperty(subject) !== true || this.journal[subject].length == 0) {
            return 0;
        }

        for (let i = 0; i < this.journal[subject].length; i++) {
            total += this.journal[subject][i];
        }

        return total / this.journal[subject].length;
    }

    getTotalAverage() {
        let averageScore = {};
        let count = 0;
        let total = 0;

        if (typeof this.journal !== undefined && this.journal || this.journal == undefined ) {  //проверка на пустой объект
            averageScore.average = 0;
        }

        for (let subject in this.journal) {
            averageScore[subject] = this.getAverageBySubject(subject);
            if (this.journal.hasOwnProperty(subject)) count ++;
            total += averageScore[subject];
            averageScore.average = total / count;
        }
        return averageScore.average
    }
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) // Олег Никифоров
console.log(log.addGrade(3, 'algebra')); 
// 1
// console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0
console.log(log.addGrade(4, 'algebra')); 
// 2
console.log(log.addGrade(5, 'geometry')); 
// 1
// console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
//console.log(log.getAverageBySubject('math')); // 0

console.log(log.getTotalAverage()); // 3,75