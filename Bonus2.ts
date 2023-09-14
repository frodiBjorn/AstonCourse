function reverseStr(str:string): string {
  return str.split("").reverse().join("");
}

const reversedString = reverseStr("Hello, world!");
console.log(reversedString); // Выведет "!dlrow ,olleH"


// Здесь используется chaning, сначала преобразуем строку в массив символов с помощью метода split(""). Потом используем метод reverse(), чтобы перевернуть порядок элементов в массиве. А затем объединяем все элемента массива в строку с пустым разделителем методом join("").