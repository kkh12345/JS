//함수 연습

//1,2,3
function greet(name) {
  console.log('Hi, my name is', name);
  return name;
}
const name = greet('jessica');
console.log(name);

//4
function meetAt(year, month, date) {
  if (date) {
    return `${year}/${month}/${date}`;
  }
  if (month) {
    return `${year}년 ${month}월`;
  }
  if (year) {
    return `${year}년`;
  }
}

console.log(meetAt(2022, 1, 7));
//5
function findSmallestElement(arr) {
  let result = arr[0];
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 1; i < arr.length; i++) {
    if (result > arr[i]) {
      result = arr[i];
    }
  }
  return result;
}

let smallestNumber = findSmallestElement([100, 200, 3, 0, 2, 1]);
console.log(smallestNumber);

//6
let unit = [50000, 10000, 5000, 1000, 500, 100];
function changeCalculate(money) {
  for (let i = 0; i < unit.length; i++) {
    let num = Math.floor(money / unit[i]);
    console.log(unit[i] + 'X' + num);
    money = money - unit[i] * num;
  }
}

changeCalculate(12300);
