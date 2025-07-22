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




let result = 5 + 5 + '5';
console.log(result);          
console.log(typeof result);   

    let email = "example@gmail.com";

let containsAt = email.includes("@");
let length = email.length;

console.log("Містить @:", containsAt);       
console.log("Кількість символів:", length);

let word1 = "My";
let word2 = "name";
let word3 = "is";

let fullName = `${word1} ${word2} ${word3}`;
fullName += " Viktor";

console.log(fullName); 

let userName = "Олександро";
let payment = 300;

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
