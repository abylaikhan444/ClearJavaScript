// TASK 1
// const age = 17;
// if (age >= 0 && age < 18) {
//     console.log('Hello!');
// } else if (age >= 18 && age < 50 ) {
//     console.log('Hello bro!');
// } else if (age >= 50 && age < 100 ) {
//     console.log('Hello good!');
// } else {
//     console.log('NICE!');
// }


// TASK 2
// const productUser = 'КлавиаТУРА к21';
// const productUser2 = 'Мышка Б54';
// let productList = {
//     "Мышка Б54": 2200,
//     "Клавиатура К22": 9400,
//     "Монитор М123": 52000
// }
// function showProductPrice(str) {
//     let strLower = str.toLowerCase();
//     for (let key in productList) {
//         key = key.toLowerCase();
//         if (strLower === key) {
//             console.log('True')
//         } else {
//             console.log('False')
//         }
//     }
// }
//
// showProductPrice(productUser);



// TASK 3
// const userNumber = 3;
// const randomNumber = Math.floor(Math.random() * 5 + 1);
//
// if (userNumber === randomNumber) {
//     console.log(`Верно, я загадал число ${randomNumber}.`);
// } else if (userNumber > 5 || userNumber < 1 || !Number.isInteger(userNumber) || isNaN(userNumber)) {
//     console.log(`Необходимо было ввести целое число от 1 до 5 включительно.`);
// } else {
//     console.log(`Нет, не ${userNumber}, я загадал число ${randomNumber}.`);
// }


// TASK 1

let num = -1;
if (num === 0) {
    console.log('Zero');
} else if (num < 0) {
    console.log('Negative');
} else {
    console.log('Positive');
}


// TASK 2

let num = 12;
if (num % 2 === 0) {
    console.log('Even Number');
} else {
    console.log('Odd Number');
}


// TAKS 3

let age = 18;
if (age < 13) {
    console.log('Child');
} else if (age >= 13 && age <= 17) {
    console.log('Teenager');
} else {
    console.log('Adult');
}


// TASK 4
//
let score = 100 >= 50 ? 'Pass' : 'Fail';
console.log(score);


// TASK 5

let a = 10;
let b = 25;

const result = a > b ? a : b;


// TASK 6

let dayNumber = 14;

switch (dayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Only number (1-7) || No String!')
}



// TASK 7

let a = 0;
let b = 1;
let char = '/';

switch (char) {
    case '-':
        console.log(a - b);
        break;
    case '+':
        console.log(a + b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        if (b === 0) {
            console.log('You cant divide number(i > 0) on zero')
        } else {
            console.log(a / b);
        }
        break
    default:
        console.log('ERROR!');
        break;
}


// TASK 8
// Не использовал привидения в нижний или верхний регистор, так как подумал что так будет правильней что бы пороль совподал на 100%
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log('Welcome!');
} else {
    console.log('Access denied!');
}


// TASK 9

let month = 10;
if (month < 1 || month > 12) {
    console.log('You need to write num 1-12')
} else if (month === 12 || month === 1 || month === 2) {
    console.log('WINTER!');
} else if (month === 3 || month === 4 || month === 5) {
    console.log('SPRING!');
} else if (month === 6 || month === 7 || month === 8) {
    console.log('SUMMER!');
} else if (month === 9 || month === 10 || month === 11) {
    console.log('AUTUMN!');
}


// TASK 10

let price = 120;
let discount = 0;

if (price >= 100) {
    discount = 0.2;
} else if (price >= 50) {
    discount = 0.1;
}

let total = price - (price * discount);
console.log(total);