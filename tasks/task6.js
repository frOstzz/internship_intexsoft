const array = [1, 2, 4, 6, 7];
const newArr = [];

for (let i = 0; i < array.length; i += 1) {
  newArr.push(array[i] * array[i]);
}

let result = newArr.reduce((a, b) => a + b);

console.log(result);
