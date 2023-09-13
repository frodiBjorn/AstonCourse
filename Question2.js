const counter = {
  count: 0,
  increment: function () {
    this.count++;
  },
  decrement: function () {
    this.count--;
  },
};

// 0. Копирование ссылки на объект:
// const counterCopy = counter;
// console.log(counterCopy);

// 1. Копирование с помощью spread оператора:
// const counterCopy = { ...counter };
// console.log(counterCopy);

// 2. Копирование с помощью Object.assign():
// const counterCopy = Object.assign({}, counter);
// console.log(counterCopy);

// 3. Копирование с помощью JSON.stringify() и JSON.parse():
// Не сохраняет методы
// const counterCopy = JSON.parse(JSON.stringify(counter));
// console.log(counterCopy);

// 4. Копирование с помощью цикла for in:
// const counterCopy = {};
// for (let key in counter) {
//   counterCopy[key] = counter[key];
// }
// console.log(counterCopy);

// 5. Копирование с помощью Object.create():
// const counterCopy = Object.create(
//   Object.getPrototypeOf(counter),
//   Object.getOwnPropertyDescriptors(counter)
// );
// console.log(counterCopy);

// 6. Копирование с помощью функции-конструктора:
// function CounterCopy() {
//   this.count = counter.count;
//   this.increment = counter.increment;
//   this.decrement = counter.decrement;
// }
// const counterCopy = new CounterCopy();
// console.log(counterCopy);

// 7. Копирование с помощью класса:
// Методы  increment()  и  decrement()  доступны и работают, но они не отображаются в выводе консоли при выводе объекта counterCopy
// class CounterCopy {
//   constructor() {
//     this.count = counter.count;
//   }
//   increment() {
//     counter.increment.call(this);
//   }
//   decrement() {
//     counter.decrement.call(this);
//   }
// }
// const counterCopy = new CounterCopy();
// console.log(counterCopy);
// counterCopy.increment();
// console.log(counterCopy.count); // Выведет 1

// counterCopy.decrement();
// console.log(counterCopy.count); // Выведет 0

// 8. Копирование с помощью библиотеки lodash:
// import cloneDeep from "lodash/cloneDeep.js";
// const counterCopy = cloneDeep(counter);
// console.log(counterCopy);
