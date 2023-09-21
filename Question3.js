// Через функцию конструктор:
function createPerson(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log("Привет, меня зовут " + this.name);
  };
}
const person = new createPerson("Иван", 26);

function createPerson2(name, age) {
  createPerson.call(this, name, age);
}
createPerson2.prototype = Object.create(createPerson.prototype);
const person2 = new createPerson2("Юля", 20);

createPerson.prototype.logInfo = function () {
  console.log("Имя: " + this.name + ", Возраст: " + this.age);
};

// console.log(person);
// console.log(person2);
// person.sayHello();
// person2.sayHello();
// person.logInfo();
// person2.logInfo();

// Через классы:
class Person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Привет, меня зовут " + this.name);
  }
}
const person3 = new Person3("Дима", 42);

class Person4 extends Person3 {
  constructor(name, age) {
    super(name, age);
  }
}
const person4 = new Person4("Анна", 30);

Person3.prototype.logInfo = function () {
  console.log("Имя: " + this.name + ", Возраст: " + this.age);
};

// console.log(person3);
// console.log(person4);
// person3.sayHello();
// person4.sayHello();
// person3.logInfo();
// person4.logInfo();

// Через литерал объекта и Object.create():
const person5 = {
  name: "Алексей",
  age: 10,
  sayHello() {
    console.log("Привет, меня зовут " + this.name);
  },
};

const person6 = Object.create(person5);
person6.name = "Катя";
person6.age = 55;

person5.logInfo = function () {
  console.log("Имя: " + this.name + ", Возраст: " + this.age);
};
// console.log(person5);
// console.log(person6);
// person5.sayHello();
// person6.sayHello();
// person5.logInfo();
// person6.logInfo();

// Через литерал объекта и setPrototypeOf()

const person7 = {
  name: "Гриша",
  age: 99,
  sayHello() {
    console.log("Привет, меня зовут " + this.name);
  },
};

const person8 = Object.setPrototypeOf({ name: "Лиза", age: 100 }, person7);

person7.logInfo = function () {
  console.log("Имя: " + this.name + ", Возраст: " + this.age);
};

// console.log(person7);
// console.log(person8);
// person7.sayHello();
// person8.sayHello();
// person7.logInfo();
// person8.logInfo();
