// // // const processArray = (callback, array) => {
// // //     return callback(array);
// // // };

// // const { version } = require("react");

// // // const searchShortword = (array) => {
// // //     let shortestWord = array[0];
// // //     for (const word of array) {
// // //         if (word.length < shortestWord.length) {
// // //             shortestWord = word;
// // //         }
// // //     }
// // //     return shortestWord;
// // // };

// // // console.log(
// // //     processArray(searchShortword, ["student", "salesman", "come", "y", "metal"])
// // // );


// // // const fn = (callback, array) => {
// // //     return callback(array);
// // // };

// // // const callback = (array) => {
// // //     for (let i = 0; i < array.length; i++) {
// // //         // console.log(array[i])
// // //         console.log(typeof array[i]);

// // //         if (typeof(array[i]) === "string") {
// // //             console.log("sodkr");
// // //         }
// // //     }
// // // };

// // // const arr = [10, "**", 3, "red"]; // Знайти які є числа та рядки
// // // console.log(fn(callback, arr));


// // const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
// // const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

// // function countItems(array, condition) {
// //   let count = 0;
// //   for (const element of array) {
// //     if (condition(element)) {
// //       count++;
// //     }
// //   }
// //   return count;
// // }

// // const isEven = num => num % 2 === 0;
// // const isLarge = num => num > 10;
// // const isShort = word => word.length <= 3;

// // console.log('Парних чисел:', countItems(numbers, isEven));  // 3
// // console.log('Чисел більше 10:', countItems(numbers, isLarge)); // 3
// // console.log('Коротких слів:', countItems(words, isShort)); // 1

 



// // const calculate = (a, b, operation) => operation(a, b);

// // const add = (a, b) => a + b;
// // const subtract = (a, b) => a - b;
// // const multiply = (a, b) => a * b;
// // const divide = (a, b) => {
// //   if (b === 0) {
// //     return 'Помилка: ділення на нуль!';
// //   }
// //   return a / b;
// // };

// // console.log(calculate(10, 5, add));      
// // console.log(calculate(10, 5, subtract)); 
// // console.log(calculate(10, 5, multiply)); 
// // console.log(calculate(10, 5, divide));   
// // console.log(calculate(10, 0, divide));  




// // function repeatMessage(times, messageCreator) {
// //   for (let i = 0; i < times; i++) {
// //     console.log(messageCreator(i));
// //   }
// // }


// // repeatMessage(3, i => `Повідомлення №${i + 1}`);
// // repeatMessage(5, i => `*${i}* Hello!`);
// // repeatMessage(4, i => `Квадрат ${i} = ${i * i}`);


// const user = {
//     name: "arsenii",
//     age: 20, 
//     location: "ucrain",
//     surname: "vdovychenko",

// }

// // for (const key in user){
// //     // console.log(key);
// //     console.log(user[key]);
    
// // }

// // const kay = Object.keys(user)
// // console.log(kay);
// // for(const x of kay){
// //   // console.log(x);
// //   console.log(user[x]);
  
// // }
// const key = Object.keys(user)
// console.log(key);

// const vely = Object.values(user)
// console.log(vely);

// const entri = Object.entries(user)
// console.log(entri);
// for (const x of entri){
//   console.log(x[1]);
  
// }
  


// // Дано масив об’єктів
//     const friends = [
//     { name: "Mango", online: false },
//     { name: "Kiwi", online: true },
//     { name: "Poly", online: false },
//     { name: "Ajax", online: false },
//     ];

//     const findFriendByName = (array, friendName) => {
//     for (const i of array) {
//         if (i.name === friendName) {
//         return `Друга знайшли ${friendName}`;
//         }
//     }
//     return `Друга не знайшли ${friendName}`; 
//     };

//     // Написати функція яка буде отримувати масив та ім’я друга якого потрібно знайти
//     console.log(findFriendByName(friends, "Poly"));
//     console.log(findFriendByName(friends, "Chelsy"));
// ------------------ bankAccount ------------------
let bankAccount = {
  ownerName: "Іван",
  accountNumber: "UA123456789",
  balance: 1000,

  deposit: function (amount) {
    this.balance += amount;
    alert(`На рахунок додано ${amount} грн. Залишок: ${this.balance} грн.`);
  },

  withdraw: function (amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      alert(`Знято ${amount} грн. Залишок: ${this.balance} грн.`);
    } else {
      alert("Недостатньо коштів на рахунку!");
    }
  }
};

// Використання confirm() і prompt()
if (confirm("Бажаєте поповнити рахунок?")) {
  let sum = parseFloat(prompt("Введіть суму для поповнення:"));
  bankAccount.deposit(sum);
} else if (confirm("Бажаєте зняти гроші?")) {
  let sum = parseFloat(prompt("Введіть суму для зняття:"));
  bankAccount.withdraw(sum);
} else {
  alert(`Ваш баланс: ${bankAccount.balance} грн.`);
}


// ------------------ weather ------------------
let weather = {
  temperature: parseFloat(prompt("Введіть температуру (°C):")),
  humidity: 70,
  windSpeed: 5,

  isBelowZero: function () {
    return this.temperature < 0;
  }
};

if (weather.isBelowZero()) {
  alert("Температура нижче 0 градусів Цельсія ❄️");
} else {
  alert("Температура вище або рівна 0 градусів Цельсія 🌞");
}


// ------------------ user ------------------
let user = {
  name: "Петро",
  email: "test@example.com",
  password: "12345",

  login: function () {
    let inputEmail = prompt("Введіть email:");
    let inputPassword = prompt("Введіть пароль:");

    if (inputEmail === this.email && inputPassword === this.password) {
      alert("Вхід виконано успішно ✅");
    } else {
      alert("Невірний email або пароль ❌");
    }
  }
};

// Виклик методу входу
user.login();


// ------------------ movie ------------------
let movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,

  isHighRated: function () {
    return this.rating > 8;
  }
};

console.log(`Назва: ${movie.title}`);
console.log(`Режисер: ${movie.director}`);
console.log(`Рік: ${movie.year}`);
console.log(`Рейтинг: ${movie.rating}`);
console.log(`Фільм має високий рейтинг? ${movie.isHighRated()}`);
