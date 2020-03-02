// 2) Дан массив ["php", "php", "css", "css", "script", "script", "html", "html", "java"]
// Удалить повторяющиеся элементы

function delRepeatElems(arr) {
  const reverseArr = arr.reverse();

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === reverseArr[i]) {
      arr.splice(arr.indexOf(arr[i]), 1);
    }
  }
  return arr;
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
