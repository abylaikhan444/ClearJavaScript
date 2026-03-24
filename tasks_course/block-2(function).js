// TASK 1
// Создай функцию sayHello() → выводит "Hello"

function sayHello() {
    return 'Hello';
}

sayHello();

// TASK 2
// Create function greet(name) → outputs 'Hello, John'

function greet(str) {
    return `Hello ${str}`;
}

greet('Abylaikhan');

// TASK 3
// Function sum(a, b) → returns sum.

function sum(a, b) {
    return a + b;
}

sum(1, 2);

// TASK 4
// Function isEven(num) → returns true/false.

function isEven(num) {
    if (num === 0) {
        return 'Number is equals Zero';
    } else if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

isEven(33);
isEven(22);

// TASK 5
// Function square(num) → returns square of a number.

function square(num) {
    return num ** num
}

square(10);
square(50);

// TASK 6
// Function max(a, b) → returns larger number.

function max(a, b) {
    if (a === b) {
        return 'Numbers is equals';
    } else if (a > b) {
        return a;
    } else {
        return b;
    }
}

max(1, 2);
max(222, 222);
max(765, 567);


// TASK 7
// Function min(a, b, c) → returns minimum.





