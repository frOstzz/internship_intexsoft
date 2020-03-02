// 2) Дан массив ["php", "php", "css", "css", "script", "script", "html", "html", "java"]
// Удалить повторяющиеся элементы

function delRepeatElems(arr) {
  const data = {};
  arr.forEach(function(i) {
    data[i] = true;
  });
  const result = Object.keys(data);
  return result;
}

console.log(
  delRepeatElems([
    "php",
    "php",
    "css",
    "css",
    "script",
    "script",
    "html",
    "html",
    "java"
  ])
);
