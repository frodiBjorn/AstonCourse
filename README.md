## Question 1 - in Question1.js

---

## Question 2 - in Question2.js

---

## Question 3 - in Question3.js

---

## Question 4

Top Level Await (TLA) - подразумевает то, что мы можем использовать ключевое слово await отдельно (вне асинхронной функции) на верхнем уровне модуля . Это означает, что модули с дочерними модулями, которые используют, await будут ждать выполнения дочерних модулей, прежде чем они сами запустятся, при этом не блокируя загрузку других дочерних модулей.

Пример:

(_Чтобы пример работал в Node, надо создать файл package.json и добавить туда поле type, со значением module_)

```
{
  "type": "module"
}
```

```js
// Module1.js
const resp = await fetch("https://jsonplaceholder.typicode.com/users");

const users = await resp.json();

export { users };
```

```js
// Module2.js
import { users } from "./Module1.js";
const data = await users;

console.log(data);
```
---
## Bonus - in Bonus.js