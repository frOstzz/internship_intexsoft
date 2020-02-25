// 2) Дан массив ["php", "php", "css", "css", "script", "script", "html", "html", "java"]
// Удалить повторяющиеся элементы

function delRepeatElems(arr) {
  return Array.from(new Set(arr));
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
