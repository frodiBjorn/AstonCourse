Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...innerArgs) {
    return fn.apply(context, [...args, ...innerArgs]);
  };
};

function greet(name, message = "") {
  console.log(`Hello, ${name}! I'm ${this.name}.` + `${message}`);
}
const person = { name: "Ivan" };

const boundGreet = greet.myBind(
  person,
  "Vladimir",
  " I finished this homework."
);
boundGreet(); // Hello, Vladimir! I'm Ivan. I finished this homework.
