const obj1 = {
  here: { is: "on", other: "3" },
  object: "Y",
};

const obj2 = {
  here: { is: "on", other: "2" },
  object: "Y",
};

const deepEqual = (obj1, obj2) => {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return obj1 === obj2;
  }

  if (obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
};

console.log(deepEqual(obj1, obj2));


// В первом условии проверяем на идентичность типов
// Во втором условии проверяем на null
// Далее получаем ключи объектов
// Проверяем на количество ключей
// Рекурсивное сравнение значений по каждому ключу