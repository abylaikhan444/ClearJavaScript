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
const userNumber = 3;
const randomNumber = Math.floor(Math.random() * 5 + 1);

if (userNumber === randomNumber) {
    console.log(`Верно, я загадал число ${randomNumber}.`);
} else if (userNumber > 5 || userNumber < 1 || !Number.isInteger(userNumber) || isNaN(userNumber)) {
    console.log(`Необходимо было ввести целое число от 1 до 5 включительно.`);
} else {
    console.log(`Нет, не ${userNumber}, я загадал число ${randomNumber}.`);
}

