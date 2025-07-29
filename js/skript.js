// let age = 15;
// console.log(age);

// let name = "Іван";
// console.log(name);

// let isStudent = true; 
// console.log(isStudent);

// let myString = "Ніколи не здавайся, навіть коли важко!";
// console.log(myString);

// let myNumber = 15;
// myNumber = myNumber + 10; 
// console.log(myNumber); 

// let myNull = null;
// console.log(myNull);

// let userName = prompt("Введіть своє ім’я");
// alert("Ваше ім’я: " + userName);
// console.log(typeof userName); 

// let userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
// console.log(userAnswer); 

// alert("Увага! Дія може бути небезпечною.");
// let confirmDanger = confirm("Ви впевнені, що хочете продовжити?");
// console.log("Користувач підтвердив дію:", confirmDanger);

// let celsius = 25;
// let fahrenheit = (celsius * 9/5) + 32;
// console.log("Температура у Фаренгейтах:", fahrenheit);

// let daysInMonth = 30;
// let hoursInMonth = daysInMonth * 24;
// let minutesInMonth = hoursInMonth * 60;
// console.log("Годин у місяці:", hoursInMonth);
// console.log("Хвилин у місяці:", minutesInMonth);

// let health = 100;
// let energy = 80;
// health -= 20; // зменшуємо здоров’я на 20
// energy -= 15; // зменшуємо енергію на 15
// console.log("Здоров’я:", health);
// console.log("Енергія:", energy);

// let totalPrice = 500;
// let discount = 0.1;
// let discountedPrice = totalPrice * (1 - discount);
// console.log("Ціна зі знижкою:", discountedPrice);

// const floatNumber = 12.78;
// let roundedDown = Math.floor(floatNumber);
// console.log("Округлено вниз:", roundedDown);

// const floatString = "45.67";
// let parsedFloat = parseFloat(floatString);
// console.log("Десяткове число:", parsedFloat);

// const intString = "123";
// let parsedInt = parseInt(intString);
// console.log("Ціле число:", parsedInt);

// let number = 64;
// let sqrtNumber = Math.sqrt(number);
// console.log("Квадратний корінь:", sqrtNumber)

// const integer = 42;
// const stringNumber = "256";
// let convertedInt = parseInt(stringNumber);
// let convertedString = integer.toString();
// console.log("Рядок '256' у число:", convertedInt);
// console.log("Число 42 у рядок:", convertedString);

// const message = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// console.log(message(message.length-1));

// // Створити змінну, яка містить рядок з вашим ім'ям. 
// // Використовуючи метод .toUpperCase(), перетворити рядок у верхній регістр та вивести результат в консоль.

// const myManem = "Ivan"
// console.log(myManem.toUpperCase());



// let result = 5 + 5 + '5';
// console.log(result);          
// console.log(typeof result);   

//     let email = "example@gmail.com";

// let containsAt = email.includes("@");
// let length = email.length;

// console.log("Містить @:", containsAt);       
// console.log("Кількість символів:", length);

// let word1 = "My";
// let word2 = "name";
// let word3 = "is";

// let fullName = `${word1} ${word2} ${word3}`;
// fullName += " Viktor";

// console.log(fullName); 

// let userName = "Олександро";
// let payment = 300;

// alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);

//Напиши скрит підрахунку суми покупки зі знижкою в залежності від витраченої суми за весь час (партнерська програма).

// Користувач вводить в інпут сумму витрачену в даному магазині і отримує розмір знижки як результат.
//  - Загальна сума витрачених коштів зберігається в змінній totalSpent
//  - Сума поточного платежа зберігається в змінній payment
//  - Знижка зберігається в змінній discount

//  - Якщо витрачено від [100 до 1000) - бронзовий партнер, знижка 2%
//  - Якщо витрачено від [1000 до 5000) - срібний партнер, знижка 5%
//  - Якщо витрачено більше [5000 - золотий партнер, знижка 10%
//  - Якщо витрачено менше 100) - не партнер, знижка 0%

//  - В результаті вивести повідомлення
//  «Оформляемо замовлення на суму [сума] зі знижкою [знижка]%»

// 'Бронзовий партнер, знижка 2%'
// 'Срібний партнер, знижка 5%'
// 'Золотий партнер, знижка 10%'
// 'У вас ще немає партнерської знижки'


// const totalSpent = parseFloat(prompt("Введіть загальну суму витрачених коштів:"));

// const payment = parseFloat(prompt("Ведіть суму поточного платежу "))

// let discount = 0;

// if(totalSpent >= 5000){
//     discount = 10;
// }else if(totalSpent >= 1000 && totalSpent < 5000){
//     discount = 5;
// }else if(totalSpent >= 100 && totalSpent < 1000){
//     discount = 2;
// }else {
//     discount = 0;
// }
// const totalPrise = payment - (payment * discount / 100)
// alert(`Оформляемо замовлення на суму ${totalPrise} зі знижкою ${discount}%`)


        let modalFile = prompt("Введіть Text");
        let fileModal = prompt("Введіть Texts");
       
    if  (modalFile !== "" && fileModal !== ""){
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}   

//Створіть дві змінні для зберігання числових значень. Обчисліть їх суму. Якщо сума більше 10 — виведіть "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".

let num1 = parseFloat(prompt("Введіть перше число"));
let num2 = parseFloat(prompt("Введіть друге число"));

let sum = num1 + num2; // обчислення суми parseFloat

        if ((sum > 10)){
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}
console.log("Сума чисел:", sum); // виведення результату

//Створіть змінну для зберігання тексту. Перевірте, чи містить цей текст слово "JavaScript". 
// Якщо містить, виведіть "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".

const javaScript = "JavaScript"

if (javaScript.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}
//Створіть змінну для зберігання числа. Перевірте, чи це число більше 10 і менше 20. 
// Якщо так — виведіть "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".

let num = parseFloat(prompt("Введіть перше число"));

        if ((num > 10 && num < 20)){
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

//Створіть змінні для зберігання значень полів (ім'я, email, пароль). Перевірте, чи ім'я містить не менше 3 символів, чи email містить символ @ 
// та крапку після нього, а пароль не менше 6 символів. 
// Якщо всі умови виконані — виведіть "Перенаправлення на іншу сторінку", якщо ні — "Помилка: неправильне заповнення".

let name = prompt("Введіть ім'я");
let email = prompt("Введіть email");
let password = prompt("Введіть пароль");

if (name.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}