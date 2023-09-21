class Person {
  constructor(name) {
    this.name = name;
  }
}

class PersonThree extends Person {
  constructor(name) {
    super(name);
  }
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const personThree = new PersonThree("Иван", 25);

console.log(personThree.name); //Иван
personThree.name = "Анна";
console.log(personThree.name); //Анна
