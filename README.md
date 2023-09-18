## Question 1
---
В JavaScript массивы являются "неправильными" в том смысле, что они могут совмещать в себе несколько структур данных. В отличие от некоторых других языков программирования, где массивы представляют собой однородные коллекции элементов одного типа, в JavaScript массивы могут содержать элементы различных типов данных. 
Например, в одном массиве в JavaScript можно хранить числа, строки, объекты и другие массивы. 

Кроме того, JavaScript массивы не имеют фиксированного размера и автоматически изменяют свою длину при добавлении или удалении элементов. Они также обладают рядом встроенных методов, позволяющих выполнять различные операции с элементами массива, такие как добавление, удаление, сортировка и поиск.

**В JS массивы совмещают в себе фунции нескольких других структур данных**:
- List  - *могут содержать элементы разных типов данных.*

- Stack - *массивы в JavaScript могут использоваться в качестве стека, где добавление и удаление элементов происходит только в одном конце массива. С помощью методов `push()` и `pop()`.*

- Queue - *массивы также могут использоваться в качестве очереди, где добавление элементов происходит в конец массива, а удаление - в начале. С помощью методов `push()` для добавления элементов и `shift()`.*
---

## Question 2
---
```js
function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };
```
### Используя bind:
```js
const boundLogger = logger.bind(obj);
boundLogger(); // I output only external context: some value
```

### Используя call:
```js
logger.call(obj); // I output only external context: some value
```

### Используя apply:
```js
logger.apply(obj); // I output only external context: some value
```
---
## Bonus task - in Bonus.js
---
