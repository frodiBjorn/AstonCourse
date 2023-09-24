let promiseTwo = new Promise((resolve, reject) => {
  resolve("a");
});

promiseTwo
  .then((res) => {
    return res + "b";
  })
  .then((res) => {
    return res + "с";
  })
  .finally((res) => {
    return res + "!!!!!!!";
  })
  .catch((res) => {
    return res + "d";
  })
  .then((res) => {
    console.log(res); //"abc"
  });

// Создаётся промис promiseTwo, выполняется и возвращает "a"

// Затем метод then принимает значение "a" и добавляет к нему "b", получаем "ab"

// Затем ещё один метод then принимает занчение "ab" и добавляет к нему "c", получаем "abc"

// Метод finally ничего не принимает и не отдаёт

// Метод catch не будет вызван так как предыдущие методы выполняются успешно.

// В конце последний метод then выводит резульат в консоль, получаем "abc"
