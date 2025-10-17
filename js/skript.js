// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
// Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого 
// (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
// Завдання 4
// Напиши функцію countTotalSalary(employees) приймаючу об
// 'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, 
// переданого в функцію, має вигляд "ім'я":"зарплата".
// Завдання 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. 
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
// Завдання 6
// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту 
// (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.
// Завдання 7 — додаткове, виконувати не обов'язково
// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об
// 'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

const user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

function countProps(obj) {
  return Object.keys(obj).length;
}
console.log(countProps({ name: "Mango", age: 2 })); 
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); 

function findBestEmployee(employees) {
  let bestName = "";
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestName = name;
    }
  }

  return bestName;
}
const employees = {
  John: 10,
  Peter: 15,
  Kate: 25,
  Mary: 20
};
console.log(findBestEmployee(employees)); 


function countTotalSalary(employees) {
  let total = 0;

  for (const salary of Object.values(employees)) {
    total += salary;
  }
  return total;
}
const salaries = {
  John: 1000,
  Mary: 1500,
  Peter: 1200
};
console.log(countTotalSalary(salaries)); 


function getAllPropValues(arr, prop) {
  const values = [];

  for (const obj of arr) {
    if (prop in obj) {
      values.push(obj[prop]);
    }
  }

  return values;
}

const products = [
  { name: "Apple", price: 50, quantity: 10 },
  { name: "Banana", price: 20, quantity: 5 },
  { name: "Orange", price: 30, quantity: 15 }
];

console.log(getAllPropValues(products, "name")); 
console.log(getAllPropValues(products, "quantity")); 


function calculateTotalPrice(allProducts, productName) {
  let total = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      total += product.price * product.quantity;
    }
  }

  return total;
}
const allProducts = [
  { name: "Apple", price: 50, quantity: 10 },
  { name: "Banana", price: 20, quantity: 5 },
  { name: "Orange", price: 30, quantity: 15 }
];
console.log(calculateTotalPrice(allProducts, "Apple")); 
console.log(calculateTotalPrice(allProducts, "Orange")); 

















