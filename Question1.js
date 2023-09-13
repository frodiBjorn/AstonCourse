// 1. Литерал объекта:
// const counter = {};

// 2. Конструктор Object:
// const counter = new Object();

// 3. Создание объекта с помощью Object.create():
// const counter = Object.create(null);

// 4. Создание объекта с помощью функции-конструктора:
// function Counter() {
//   this.count = 0;
//   this.increment = function () {
//     this.count++;
//   };
//   this.decrement = function () {
//     this.count--;
//   };
// }
// const counter = new Counter();

// 5. Создание объекта с помощью класса:
// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }

//   decrement() {
//     this.count--;
//   }
// }
// const counter = new Counter();

// 6. Создание объекта с помощью Object.assign():
// const counter = Object.assign(
//   {},
//   {
//     count: 0,
//     increment: function () {
//       this.count++;
//     },
//     decrement: function () {
//       this.count--;
//     },
//   }
// );

// 7. Создание объекта с помощью spread-оператора:
// const counter = {
//   ...{
//     count: 0,
//     increment: function () {
//       this.count++;
//     },
//     decrement: function () {
//       this.count--;
//     },
//   },
// };

// 8. Создание объекта с помощью функции-конструктора и прототипа:
// function Counter() {
//   this.count = 0;
// }
// Counter.prototype.increment = function () {
//   this.count++;
// };
// Counter.prototype.decrement = function () {
//   this.count--;
// };
// const counter = new Counter();

// 9. Создание объекта с помощью прототипного наследования:
// const counterPrototype = {
//   increment: function () {
//     this.count++;
//   },
//   decrement: function () {
//     this.count--;
//   },
// };
// const counter = Object.create(counterPrototype);
// counter.count = 0;
