'use strict';

// Задача 1. Форматтер чисел
function parseCount(number) {
    const parsed = Number.parseInt(number, 10);
    if (isNaN(parsed)) throw new Error('Невалидное значение');
    return parsed
}

function validateCount(number) {
    try { 
        return parseCount(number);
    } catch(e) {
        return e
    }
}

// Задача 2. Треугольник
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b < c) || (b + c < a) || (a + c < b)) throw new Error('Треугольник с такими сторонами не существует');
    }
    
    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(S.toFixed(3));
    } 
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}