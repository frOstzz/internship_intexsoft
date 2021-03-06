//Найти максимальный и минимальный элемент массива за 1 пробег

function findMinAndMaxValue(arr) {
  let min = arr[0];
  let max = min;

  for (let i = 1; i < arr.length; i += 1) {
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
  }

  const result = { min: min, max: max };

  return result;
}

console.log(findMinAndMaxValue([1, 2, 3, 4, 5, 6]));
