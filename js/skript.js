// const processArray = (callback, array) => {
//     return callback(array);
// };

// const searchShortword = (array) => {
//     let shortestWord = array[0];
//     for (const word of array) {
//         if (word.length < shortestWord.length) {
//             shortestWord = word;
//         }
//     }
//     return shortestWord;
// };

// console.log(
//     processArray(searchShortword, ["student", "salesman", "come", "y", "metal"])
// );


// const fn = (callback, array) => {
//     return callback(array);
// };

// const callback = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         // console.log(array[i])
//         console.log(typeof array[i]);

//         if (typeof(array[i]) === "string") {
//             console.log("sodkr");
//         }
//     }
// };

// const arr = [10, "**", 3, "red"]; // Знайти які є числа та рядки
// console.log(fn(callback, arr));


const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

function countItems(array, condition) {
  let count = 0;
  for (const element of array) {
    if (condition(element)) {
      count++;
    }
  }
  return count;
}

const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

console.log('Парних чисел:', countItems(numbers, isEven));  // 3
console.log('Чисел більше 10:', countItems(numbers, isLarge)); // 3
console.log('Коротких слів:', countItems(words, isShort)); // 1

 



const calculate = (a, b, operation) => operation(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return 'Помилка: ділення на нуль!';
  }
  return a / b;
};

console.log(calculate(10, 5, add));      
console.log(calculate(10, 5, subtract)); 
console.log(calculate(10, 5, multiply)); 
console.log(calculate(10, 5, divide));   
console.log(calculate(10, 0, divide));  




function repeatMessage(times, messageCreator) {
  for (let i = 0; i < times; i++) {
    console.log(messageCreator(i));
  }
}


repeatMessage(3, i => `Повідомлення №${i + 1}`);
repeatMessage(5, i => `*${i}* Hello!`);
repeatMessage(4, i => `Квадрат ${i} = ${i * i}`);
