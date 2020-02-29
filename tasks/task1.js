// 1) Дана строка типа "1а2п3р4о5л6"
// Вывести через "-" все четные числа.

const string = "1а2п3р4о5л6";
const arr = string.split("");

for (let i = 0; i < arr.length; i += 1) {
  if (!isNaN(+arr[i])) {
    arr.splice(arr[i], 1);
  }
}

const newArr = [];

for (let i = 0; i < arr.length; i += 1) {
  if (+arr[i] % 2 === 0) {
    newArr.push(arr[i]);
  }
}

const newStr = newArr.join("-");
console.log(newStr);
