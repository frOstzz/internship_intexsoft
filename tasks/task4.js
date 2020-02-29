//Отсортировать массив по 'age' (по возрастанию/по убыванию).
//Запись "Общий возраст" должна быть в конце списка. Общий возраст должен быть подсчитан корректно.

const arr = [
  { name: "Петя", age: "23" },
  { name: "Вася", age: "33" },
  { name: "Женя", age: "25" },
  { name: "Общий возраст", age: "" },
  { name: "Саша", age: "17" }
];
let test = 0;

for (let k in arr) {
  test += +arr[k].age;
}

const newArr = arr.sort((a, b) => +a.age - +b.age);
let firstElem = newArr.splice(0, 1);
firstElem[0].age = test;
newArr.push(...firstElem);

console.log(newArr);
