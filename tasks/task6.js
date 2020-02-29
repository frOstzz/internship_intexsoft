const array = [1, 2, 4, 6, 7];
const newArr = [];

for (let i = 0; i < array.length; i += 1) {
  newArr.push(array[i] * array[i]);
}

let result = 0;

for (let i = 0; i < newArr.length; i += 1) {
  result += newArr[i];
}
console.log(result);
