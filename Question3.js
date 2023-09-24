const arr = [10, 12, 15, 21];

const showIndexWithDelay = (arr) => {
  arr.forEach((el, index) => {
    setTimeout(() => {
      console.log(`Индекс элемента ${el} равен ${index}`);
    }, (index + 1) * 3000);
  });
};

showIndexWithDelay(arr);
