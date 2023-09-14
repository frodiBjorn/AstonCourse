// 1. Function Expression:
// function makeCounter() {};

// 2. Function Declaration:
// const makeCounter = function() {};

// 3. Arrow Function:
// const makeCounter = () => {};

// 4. Функция Конструктор:
// function MakeCounter() {};
// const makeCounter = new MakeCounter();

// 5. Метод объекта:
// const obj = {
//   makeCounter() {}
// };

// 6. Метод класса:
// class Counter {
//   makeCounter() {}
// }
// const counter = new Counter();

// 7. Использование функции-генератора:
// function* makeCounter() {
//   let count = 0;
//   while (true) {
//     yield count++; // оператор yield приостанавливает выполнение функции и возвращает текущее значение count
//   }
// }
// const counter = makeCounter();

// console.log(counter.next().value); // 0
// console.log(counter.next().value); // 1
// console.log(counter.next().value); // 2

// 8. Named Function Expression
// const makeCounter = function counter() {};

// 9. Анонимная функиция:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// numbers.filter((num) => num > 4);

// 10. Callback функция:
// function makeCounter(callback) {
//   try {
//     callback();
//   } catch (error) {
//     console.log(error);
//   }
// }

// 11. IIFE (Immediately Invoked Function Expression):
// (function () {})();

// 12. Функция высшего порядка (higher-order function):
// function makeCounter(increment) {
//   let count = 0;
//   return function () {
//     count += increment;
//     return count;
//   };
// }
// const incrementByOne = makeCounter(1);
// console.log(incrementByOne()); // Выведет 1
// console.log(incrementByOne()); // Выведет 2

// 13. Асинхронная функция:
// async function makeCounter() {};