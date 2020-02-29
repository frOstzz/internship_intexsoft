// 5) Объединить два массива без дублирования элементов

function unionTwoArrays(arr1, arr2) {
  const newArr = arr1.concat(arr2);
  return Array.from(new Set(newArr));
}

console.log(unionTwoArrays([1, 2, 3], [2, 3, 4]));
