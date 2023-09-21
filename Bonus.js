const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;

const firstSum = (arr, total) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }

  for (const [key] of map) {
    if (map.has(total - key)) {
      return [key, total - key];
    }
  }
  return "Nothing found for this total";
};

console.log(firstSum(arr, total));

// Этот способ имеет сложность O(2n), константа отбрасывается имеем сложность O(n)

const firstSum2 = (arr, total) => {
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        pairs.push(arr[i], arr[j]);
        return pairs;
      }
    }
  }

  return pairs;
};

console.log(firstSum2(arr, total));

// Этот способ имеет сложность O(n^2), где n - длина массива arr
