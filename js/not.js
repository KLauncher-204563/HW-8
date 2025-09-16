// // // // // let age = 15;
// // // // // console.log(age);

// // // // // let name = "Іван";
// // // // // console.log(name);

// // // // // let isStudent = true; 
// // // // // console.log(isStudent);

// // // // // let myString = "Ніколи не здавайся, навіть коли важко!";
// // // // // console.log(myString);

// // // // // let myNumber = 15;
// // // // // myNumber = myNumber + 10; 
// // // // // console.log(myNumber); 

// // // // // let myNull = null;
// // // // // console.log(myNull);

// // // // // let userName = prompt("Введіть своє ім’я");
// // // // // alert("Ваше ім’я: " + userName);
// // // // // console.log(typeof userName); 

// // // // // let userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
// // // // // console.log(userAnswer); 

// // // // // alert("Увага! Дія може бути небезпечною.");
// // // // // let confirmDanger = confirm("Ви впевнені, що хочете продовжити?");
// // // // // console.log("Користувач підтвердив дію:", confirmDanger);

// // // // // let celsius = 25;
// // // // // let fahrenheit = (celsius * 9/5) + 32;
// // // // // console.log("Температура у Фаренгейтах:", fahrenheit);

// // // // // let daysInMonth = 30;
// // // // // let hoursInMonth = daysInMonth * 24;
// // // // // let minutesInMonth = hoursInMonth * 60;
// // // // // console.log("Годин у місяці:", hoursInMonth);
// // // // // console.log("Хвилин у місяці:", minutesInMonth);

// // // // // let health = 100;
// // // // // let energy = 80;
// // // // // health -= 20; // зменшуємо здоров’я на 20
// // // // // energy -= 15; // зменшуємо енергію на 15
// // // // // console.log("Здоров’я:", health);
// // // // // console.log("Енергія:", energy);

// // // // // let totalPrice = 500;
// // // // // let discount = 0.1;
// // // // // let discountedPrice = totalPrice * (1 - discount);
// // // // // console.log("Ціна зі знижкою:", discountedPrice);

// // // // // const floatNumber = 12.78;
// // // // // let roundedDown = Math.floor(floatNumber);
// // // // // console.log("Округлено вниз:", roundedDown);

// // // // // const floatString = "45.67";
// // // // // let parsedFloat = parseFloat(floatString);
// // // // // console.log("Десяткове число:", parsedFloat);

// // // // // const intString = "123";
// // // // // let parsedInt = parseInt(intString);
// // // // // console.log("Ціле число:", parsedInt);

// // // // // let number = 64;
// // // // // let sqrtNumber = Math.sqrt(number);
// // // // // console.log("Квадратний корінь:", sqrtNumber)

// // // // // const integer = 42;
// // // // // const stringNumber = "256";
// // // // // let convertedInt = parseInt(stringNumber);
// // // // // let convertedString = integer.toString();
// // // // // console.log("Рядок '256' у число:", convertedInt);
// // // // // console.log("Число 42 у рядок:", convertedString);

// // // // // const message = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// // // // // console.log(message(message.length-1));

// // // // // // Створити змінну, яка містить рядок з вашим ім'ям. 
// // // // // // Використовуючи метод .toUpperCase(), перетворити рядок у верхній регістр та вивести результат в консоль.

// // // // // const myManem = "Ivan"
// // // // // console.log(myManem.toUpperCase());



// // // // // let result = 5 + 5 + '5';
// // // // // console.log(result);          
// // // // // console.log(typeof result);   

// // // // //     let email = "example@gmail.com";

// // // // // let containsAt = email.includes("@");
// // // // // let length = email.length;

// // // // // console.log("Містить @:", containsAt);       
// // // // // console.log("Кількість символів:", length);

// // // // // let word1 = "My";
// // // // // let word2 = "name";
// // // // // let word3 = "is";

// // // // // let fullName = `${word1} ${word2} ${word3}`;
// // // // // fullName += " Viktor";

// // // // // console.log(fullName); 

// // // // // let userName = "Олександро";
// // // // // let payment = 300;

// // // // // alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);

// // // // // Напиши скрит підрахунку суми покупки зі знижкою в залежності від витраченої суми за весь час (партнерська програма).

// // // // // Користувач вводить в інпут сумму витрачену в даному магазині і отримує розмір знижки як результат.
// // // // //  - Загальна сума витрачених коштів зберігається в змінній totalSpent
// // // // //  - Сума поточного платежа зберігається в змінній payment
// // // // //  - Знижка зберігається в змінній discount

// // // // //  - Якщо витрачено від [100 до 1000) - бронзовий партнер, знижка 2%
// // // // //  - Якщо витрачено від [1000 до 5000) - срібний партнер, знижка 5%
// // // // //  - Якщо витрачено більше [5000 - золотий партнер, знижка 10%
// // // // //  - Якщо витрачено менше 100) - не партнер, знижка 0%

// // // // //  - В результаті вивести повідомлення
// // // // //  «Оформляемо замовлення на суму [сума] зі знижкою [знижка]%»

// // // // // 'Бронзовий партнер, знижка 2%'
// // // // // 'Срібний партнер, знижка 5%'
// // // // // 'Золотий партнер, знижка 10%'
// // // // // 'У вас ще немає партнерської знижки'


// // // // // const totalSpent = parseFloat(prompt("Введіть загальну суму витрачених коштів:"));

// // // // // const payment = parseFloat(prompt("Ведіть суму поточного платежу "))

// // // // // let discount = 0;

// // // // // if(totalSpent >= 5000){
// // // // //     discount = 10;
// // // // // }else if(totalSpent >= 1000 && totalSpent < 5000){
// // // // //     discount = 5;
// // // // // }else if(totalSpent >= 100 && totalSpent < 1000){
// // // // //     discount = 2;
// // // // // }else {
// // // // //     discount = 0;
// // // // // }
// // // // // const totalPrise = payment - (payment * discount / 100)
// // // // // alert(`Оформляемо замовлення на суму ${totalPrise} зі знижкою ${discount}%`)


// // // // //         let modalFile = prompt("Введіть Text");
// // // // //         let fileModal = prompt("Введіть Texts");
       
// // // // //     if  (modalFile !== "" && fileModal !== ""){
// // // // //     console.log("Обидва поля заповнені");
// // // // // } else {
// // // // //     console.log("Не всі поля заповнені");
// // // // // }   

// // // // // //Створіть дві змінні для зберігання числових значень. Обчисліть їх суму. Якщо сума більше 10 — виведіть "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".

// // // // // let num1 = parseFloat(prompt("Введіть перше число"));
// // // // // let num2 = parseFloat(prompt("Введіть друге число"));

// // // // // let sum = num1 + num2; // обчислення суми parseFloat

// // // // //         if ((sum > 10)){
// // // // //     console.log("Сума більша за 10");
// // // // // } else {
// // // // //     console.log("Сума менша або дорівнює 10");
// // // // // }
// // // // // console.log("Сума чисел:", sum); // виведення результату

// // // // // //Створіть змінну для зберігання тексту. Перевірте, чи містить цей текст слово "JavaScript". 
// // // // // // Якщо містить, виведіть "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".

// // // // // const javaScript = "JavaScript"

// // // // // if (javaScript.includes("JavaScript")) {
// // // // //     console.log("Текст містить слово JavaScript");
// // // // // } else {
// // // // //     console.log("Текст не містить слово JavaScript");
// // // // // }
// // // // // //Створіть змінну для зберігання числа. Перевірте, чи це число більше 10 і менше 20. 
// // // // // // Якщо так — виведіть "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".

// // // // // let num = parseFloat(prompt("Введіть перше число"));

// // // // //         if ((num > 10 && num < 20)){
// // // // //     console.log("Число входить в діапазон від 10 до 20");
// // // // // } else {
// // // // //     console.log("Число не входить в діапазон від 10 до 20");
// // // // // }

// // // // // //Створіть змінні для зберігання значень полів (ім'я, email, пароль). Перевірте, чи ім'я містить не менше 3 символів, чи email містить символ @ 
// // // // // // та крапку після нього, а пароль не менше 6 символів. 
// // // // // // Якщо всі умови виконані — виведіть "Перенаправлення на іншу сторінку", якщо ні — "Помилка: неправильне заповнення".

// // // // // let name = prompt("Введіть ім'я");
// // // // // let email = prompt("Введіть email");
// // // // // let password = prompt("Введіть пароль");

// // // // // if (name.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6) {
// // // // //     console.log("Перенаправлення на іншу сторінку");
// // // // // } else {
// // // // //     console.log("Помилка: неправильне заповнення");
// // // // // }
   

// // // // // // 1. Вибір напою
// // // // // let wotEr = prompt("Виберіть напій: Кава, Чай або Сік").trim().toLowerCase();

// // // // // switch (wotEr) {
// // // // //   case 'кава':
// // // // //     console.log("Ви обрали каву.");
// // // // //     break;
// // // // //   case 'чай':
// // // // //     console.log("Ви обрали чай.");
// // // // //     break;
// // // // //   case 'сік':
// // // // //     console.log("Ви обрали сік.");
// // // // //     break;
// // // // //   default:
// // // // //     console.log("Невірний вибір. Спробуйте ще раз.");
// // // // // }

// // // // // // 2. День тижня
// // // // // let day = prompt("Введіть день тижня (наприклад: понеділок, вівторок, середа...)").trim().toLowerCase();

// // // // // if (
// // // // //   day === "понеділок" ||
// // // // //   day === "вівторок" ||
// // // // //   day === "середа" ||
// // // // //   day === "четвер" ||
// // // // //   day === "п'ятниця"
// // // // // ) {
// // // // //   console.log("Робочий день");
// // // // // } else if (day === "субота" || day === "неділя") {
// // // // //   console.log("Вихідний день");
// // // // // } else {
// // // // //   console.log("Невірно введений день тижня");
// // // // // }

// // // // // // 3. Номер місяця і пора року
// // // // // let nomer = Number(prompt("Введіть номер місяця (1-12)").trim());

// // // // // if ([12, 1, 2].includes(nomer)) {
// // // // //   console.log("Зима");
// // // // // } else if ([3, 4, 5].includes(nomer)) {
// // // // //   console.log("Весна");
// // // // // } else if ([6, 7, 8].includes(nomer)) {
// // // // //   console.log("Літо");
// // // // // } else if ([9, 10, 11].includes(nomer)) {
// // // // //   console.log("Осінь");
// // // // // } else {
// // // // //   console.log("Невірно введений номер");
// // // // // }

// // // // // // 4. Колір світлофора
// // // // // let color = prompt("Виберіть колір: червоний, зелений або жовтий").trim().toLowerCase();

// // // // // switch (color) {
// // // // //   case 'червоний':
// // // // //     console.log("стоп");
// // // // //     break;
// // // // //   case 'зелений':
// // // // //     console.log("йти");
// // // // //     break;
// // // // //   case 'жовтий':
// // // // //     console.log("чекати");
// // // // //     break;
// // // // //   default:
// // // // //     console.log("Невірний вибір. Спробуйте ще раз.");
// // // // // }

// // // // // 5. Калькулятор: два числа і оператор
// // // // let operator = prompt("Виберіть оператор: +, -, *, /").trim();
// // // // let num1 = Number(prompt("Перше число").trim());
// // // // let num2 = Number(prompt("Друге число").trim());

// // // // let result;

// // // // switch (operator) {
// // // //   case "+":
// // // //     result = num1 + num2;
// // // //     console.log("Результат: " + result);
// // // //     break;
// // // //   case "-":
// // // //     result = num1 - num2;
// // // //     console.log("Результат: " + result);
// // // //     break;
// // // //   case "*":
// // // //     result = num1 * num2;
// // // //     console.log("Результат: " + result);
// // // //     break;
// // // //   case "/":
// // // //     if (num2 === 0) {
// // // //       console.log("Помилка: Ділення на нуль неможливе!");
// // // //     } else {
// // // //       result = num1 / num2;
// // // //       console.log("Результат: " + result);
// // // //     }
// // // //     break;
// // // //   default:
// // // //     console.log("Невідомий оператор");
// // // // }




// // // // let counter = 50;
// // // // while (counter > 0){
// // // //     console.log(counter);
// // // //     counter -= 1;
// // // // }

// // // // Задача 3: Показати суму чисел від 1 до 10 (while)
// // // // let counter = 0;
// // // // let sum = 0;
// // // // while (counter < 10){
// // // //     sum += counter;
// // // //     counter += 1;
// // // // }

// // // // console.log(sum);

// // // // for (let i = 0; i <= 10; i += 1){
// // // //     console.log(i);
// // // // }

// // // // for (let i = 1; i <= 10; i += 1) {
// // // //     console.log(i);
// // // // }



// // // // let counter = 1; 
// // // // while (counter <= 10) {
// // // //     console.log(counter); 
// // // //     counter += 1; 
// // // // }

// // // // for (let i = 0; i < 20; i += 1) {
// // // //     if (i % 2 !== 1) {
// // // //         continue;
// // // //     }
// // // //     console.log(i);
// // // // }


// // // // let counter = 0;
// // // // while (counter <= 10){
// // // //     counter += 1;
// // // //     if (counter === 10){
// // // //         continue;
// // // //     }
// // // //     console.log(counter);
// // // // }


// // // // let numm;
// // // // do {
// // // //     numm = parseInt(prompt("Введите число больше 10"));
// // // // } while (numm <= 10);



// // // // let num;
// // // // do {
// // // //     num = prompt("Введіть число більше 0:");
    
// // // //     // Перевірка на число
// // // //     if (isNaN(num) || num <= 0) {
// // // //         alert("Будь ласка, введіть правильне число більше 0.");
// // // //     }
// // // // } while (isNaN(num) || num <= 0);

// // // // alert("Ви ввели правильне число: " + num);

// // // // let ffyhktptkykykjgkhojgkgkh;
// // // // let num;

// // // //  do {
// // // //     num = prompt("Ведіть ваш номер телефону 10 цифр");
// // // //     console.log(num);
    
// // // //     if (num === null){
// // // //         alert("дія скасована");
// // // //         break;
// // // //     }
// // // //     if (num.length === 10 && !isNaN(num)){
// // // //         alert("номер телефону прийнято");
// // // //         break
// // // //     }else{
// // // //         alert("невірно ведені дані");
// // // //     }
// // // //  }while(true) 


// // // // let i = 1;
// // // // while (i <= 10) {
// // // //     console.log(i);
// // // //     i++;
// // // // }

// // // // //Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити його за допомогою continue.

// // // // for (let i = 2; i <= 20; i++) {
// // // //     if (i % 2 !== 0) {
// // // //         continue;   
// // // //     }
// // // //     console.log(i); 
// // // // }



// // // // for (let i = 1; i <= 10; i++) {
// // // //     console.log(`7 * ${i} = ${7 * i}`);
// // // // }



// // // // let n = parseInt(prompt("Введіть число n:"));

// // // // for (let i = 0; ; i++) {
// // // //     if (i >= n) {
// // // //         break;
// // // //     }
// // // //     console.log(i);
// // // // }


// // // // while (i <= 20) {
// // // //     if (i % 3 === 0) {
// // // //         i++;
// // // //         continue;
// // // //     }
// // // //     console.log(i);
// // // //     i++;
// // // // }   

// // // // Напиши скрипт який рахує суму елементів двух масивів. Без методу concat()

// // // // const array1 = [5, 10, 15, 20];
// // // // const array2 = [10, 20, 30];

// // // // let totalSum = 0;

// // // // for (let i = 0; i < array1.length; i++) {
// // // //   totalSum += array1[i];
// // // // }

// // // // for (let i = 0; i < array2.length; i++) {
// // // //   totalSum += array2[i];
// // // // }

// // // // console.log(totalSum); // Виведе: 110

// // // // ЗНАЙТИ ПОД яким Індексом знаходитця Анастасія

// // // // const names = [
// // // //   "Олександр",
// // // //   "Марія",
// // // //   "Іван",
// // // //   "Анастасія",
// // // //   "Андрій",
// // // //   "Олена",
// // // //   "Дмитро",
// // // //   "Катерина",
// // // //   "Сергій",
// // // //   "Юлія",
// // // // ];

// // // // for(let i = 0; i < names.length; i += 1){
// // // // if (names[i] === "Анастасія")

// // // //     console.log("Ім'я Анастасія знаходится під індексом", i );
// // // // }

// // // // вивести в консоль ім'я людей яких імен більше 6 літер

// // // // for(let i = 0; i < names.length; i += 1){
// // // //     if(names[i].length <= 6)
// // // //         continue
// // // //     console.log(names[i]);
// // // //     }

// // // // for(let i = 0; i < names.length; i += 1){
// // // //     if(names[i].length > 6)

// // // //     console.log(names[i]);
// // // //     }

// // // // Створення масиву з трьох чисел
// // // let numbersf = [5, 3, 8];

// // // // Зміна значення другого елемента
// // // numbersf[1] = 10;

// // // console.log(numbersf);


// // // // Створення масиву з трьох рядків
// // // let strings = ["apple", "banana", "cherry"];

// // // // Додавання ще одного рядка через індексацію
// // // strings[strings.length] = "date";

// // // console.log(strings);



// // // //Створити скрипт який поверне суму всіх чисел в масиві.


// // // let numbersq = [5, 10, 15, 20];
// // // let sum = 0;

// // // for (let i = 0; i < numbersq.length; i++) {
// // //     sum += numbersq[i];
// // // }

// // // console.log("Сума всіх чисел в масиві:", sum);


// // // //Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
     
// // // let numbers = [3, 7, 12, 25, 45];

// // // for (let i = 0; i < numbers.length; i++) {
// // //     console.log(numbers[i]);
// // // }


// // // //Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.


// // // let stringsо = ["apple", "banana", "cherry", "kiwi", "orange"];

// // // for (let i = 0; i < stringsо.length; i++) {
// // //     if (stringsо[i].length > 5) {
// // //         console.log(stringsо[i]);
// // //     }
// // // }


// // // let numbersl = [1, 5, 12, 3, 7, 19, 23, 15, 8, 11];
// // // let max = numbersl[0]; 

// // // for (let i = 1; i < numbersl.length; i++) {
// // //     if (numbersl[i] > max) {
// // //         max = numbersl[i];
// // //     }
// // // }

// // // console.log("Максимальне значення:", max);




// // // let numbers2 = [1, 4, 5, 8, 12, 15, 18, 20, 25, 30];

// // // for (let i = 0; i < numbers2.length; i++) {
// // //     if (numbers2[i] % 2 === 0) {
// // //         console.log(numbers2[i]);
// // //     }
// // // }


// // // // Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
// // // 👉 Спочатку через for
// // // 👉 Потім через join()


// // const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// // let string = '';
// // for (let i = 0; i < friends.length; i++) {
// //     string += friends[i] + ' ';
// // }
// // console.log(string.trim());  // Mango Poly Kiwi Ajax


// // const friendss = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// // const strings = friendss.join(' ');
// // console.log(strings);  // Mango Poly Kiwi Ajax

// // const cards = [
// //     'Карточка-1',
// //     'Карточка-2',
// //     'Карточка-3',
// //     'Карточка-4',
// //     'Карточка-5',
// // ]

// // const cardToRemove = 'Карточка-3';
// // const indexToRemove = cards.indexOf(cardToRemove);
// // if (indexToRemove !== -1) {
// //     cards.splice(indexToRemove, 1);
// // }

// // const cardToInsert = 'Карточка-6';
// // const insertAfter = 'Карточка-2';
// // const indexToInsert = cards.indexOf(insertAfter);
// // if (indexToInsert !== -1) {
// //     cards.splice(indexToInsert + 1, 0, cardToInsert);
// // }

// // const cardToUpdate = 'Карточка-4';
// // const updatedCard = 'Нова-Карточка-4';
// // const indexToUpdate = cards.indexOf(cardToUpdate);
// // if (indexToUpdate !== -1) {
// //     cards[indexToUpdate] = updatedCard;
// // }

// // console.log(cards);


// // function fan(params) {
    
// // }

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   } 
// }

// // приклад
// logItems(['Mango', 'Poly', 'Ajax']);
// // виведе:
// // 1 - Mango
// // 2 - Poly
// // 3 - Ajax


// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(' ');
//   return words.length * pricePerWord;
// }

// // приклад
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// // => 40

// function findLongestWord(string) {
//   const words = string.split(' ');
//   let longest = words[0];

//   for (const word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }

//   return longest;
// }

// // приклад
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// // => jumped

// function formatString(string) {
//   if (string.length <= 40) {
//     return string;
//   }
//   return string.slice(0, 40) + '...';
// }

// // приклад
// console.log(formatString('This is a very long string that should be shortened'));
// // => "This is a very long string that should be..."


// function checkForSpam(message) {
//   const lowerMsg = message.toLowerCase();
//   return lowerMsg.includes('spam') || lowerMsg.includes('sale');
// }

// // приклад
// console.log(checkForSpam('Get best SALE offers now!')); // true
// console.log(checkForSpam('Hello world')); // false



// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt('Введіть число');

//   if (input === null) {
//     break;
//   }

//   input = Number(input);

//   if (Number.isNaN(input)) {
//     alert('Було введено не число, попробуйте ще раз');
//     continue;
//   }

//   numbers.push(input);
// } while (true);

// for (const num of numbers) {
//   total += num;
// }

// console.log(`Загальна сума чисел дорівнює ${total}`);


// function isLoginValid(login) {
//   return login.length >= 4 && login.length <= 16;
// }

// function isLoginUnique(allLogins, login) {
//   return !allLogins.includes(login);
// }

// function addLogin(allLogins, login) {
//   if (!isLoginValid(login)) {
//     return 'Помилка! Логін повинен бути від 4 до 16 символів';
//   }
//   if (!isLoginUnique(allLogins, login)) {
//     return 'Такий логін уже використовується!';
//   }
//   allLogins.push(login);
//   return 'Логін успішно доданий!';
// }

// // приклад
// const logins = ['Mango', 'Ajax', 'Poly'];

// console.log(addLogin(logins, 'Kiwi'));   // Логін успішно доданий!
// console.log(addLogin(logins, 'Poly'));   // Такий логін уже використовується!
// console.log(addLogin(logins, 'Ab'));     // Помилка! Логін повинен бути від 4 до 16 символів






//Напиши скрипт підрахунку вартості гравіювання прикрас. 
// Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок 
// (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const calculateEngravingPrice = (message, pricePerWord) => {

const rydok = message.split(' ')
const rezayt = rydok.length * pricePerWord
console.log(rezayt);

}
    
 calculateEngravingPrice('Напиши скрипт підрахунку вартості гравіювання прикрас.', 10)



const fn = (callback, array) => {
    return callback(array)
}

const callback = (array) => {
        let min = array[0]
       for (let i = 0; i < array.length; i++) {

        if (typeof(array[i]) === "string") {
                   continue;
           
        } else if (array[i] < min) {
            min=array[i]
        }

        }
return min
}


const arr2 = [567, 321, "903443", "293892", 2]
const arr = [10, "2", 3, "red", 7] // Знайти мін число в масиві
// console.log(fn(callback, arr))
console.log(fn(callback, arr2))