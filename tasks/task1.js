// 1) Дана строка типа "1а2п3р4о5л6"
// Вывести через "-" все четные числа.

const string = "1а2п3р4о5л6";
const newArr = string.split("");

for (let i = 0; i < newArr.length; i += 1) {
  if (!isNaN(+newArr[i])) {
    newArr.splice(newArr[i], 1);
  }
}
const newStr = newArr.join("-");
console.log(newStr);
