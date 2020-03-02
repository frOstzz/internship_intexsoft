// 5) Объединить два массива без дублирования элементов

function unionTwoArrays(arr1, arr2) {
  const data = {};
  arr1.concat(arr2).forEach(function(i) {
    data[i] = true;
  });
  const result = Object.keys(data);
  return result;
}

console.log(unionTwoArrays([1, 2, 3], [2, 3, 4]));
