function fetchUrl(url, attempts = 5) {
  return Promise.resolve()
    .then(() => fetch(url))
    .catch(() => {
      if (attempts > 0) {
        console.log(`Неудачно, осталось попыток  ${attempts}`);
        --attempts;
        return fetchUrl(url, attempts);
      } else {
        return Promise.reject("Запрос не выполнен после 5 попыток");
      }
    });
}

fetchUrl("https://google/com&#39")
  .then((response) => console.log("Ответ на запрос: ", response))
  .catch((response) => console.log("Ошибка запроса: ", response));
