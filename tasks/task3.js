// 3) [1, 2, 3, 4, 5] и [4, 5, 6]
// Найти сумму чисел в двух массивах
// Сумма соответствующих элементов в двух массивах: [5,7,9,4,5]

function sumOfArrays(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (isNaN(arr1[i] + arr2[i])) {
      newArr.push(arr1[i]);
    } else {
      newArr.push(arr1[i] + arr2[i]);
    }
  }
  return newArr;
}

console.log(sumOfArrays([1, 2, 3, 4, 5], [4, 5, 6]));
