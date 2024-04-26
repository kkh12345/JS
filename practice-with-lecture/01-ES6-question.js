//1
// let name = "noona's fruit store";
// let fruits = ['banana', 'apple', 'mango'];
// let address = 'Seoul';

// let store = { name, address, fruits };
// console.log(store);
// console.log(name);

//2
// console.log(`제 가게 이름은 ${name}입니다. 위치는 ${address}에 있습니다.`);

//3

// function calculate(obj) {
//   let { a, b, c } = obj;
//   return a + b + c;
// }
// console.log(calculate({ a: 1, b: 2, c: 3 }));

//4 ********************
let name = 'noona store';
let fruits = ['banana', 'apple', 'mango'];
let address = {
  country: 'Korea',
  city: 'Seoul',
};

function findStore(obj) {
  let {
    name,
    address: { city },
  } = obj;
  console.log(name, city);
  return name == 'noona store' && city === 'Seoul';
}

console.log(findStore({ name, fruits, address }));

//5
// function getNumber() {
//   let array = [1, 2, 3, 4, 5, 6];
//   let [first, , third, forth] = array;
//   return { first, third, forth };
// }
// console.log(getNumber());

//6
function getCalendar(first, ...rest) {
  return (
    first === 'January' &&
    rest[0] === 'Febuary' &&
    rest[1] === 'March' &&
    rest[2] === undefined
  );
}
console.log(getCalendar('January', 'Febuary', 'March'));

//7
function getMinimum() {
  let a = [45, 23, 78];
  let b = [54, 11, 9];
  array = [...a, ...b];
  console.log(array);
  return Math.min(...array);
}
console.log(getMinimum());

//8

// function sumNumber() {
//   const sum = function (a, b) {
//     return a + b;
//   };
//   return sum(40, 10);
// }

// function sumNumber() {
//   const sum = (a, b) => a + b;
//   return sum(40, 10);
// }
// console.log(sumNumber());

//9
// function sumNumber() {
//   return addNumber(1)(2)(3);

//   function addNumber(a) {
//     return function (b) {
//       return function (c) {
//         return a + b + c;
//       };
//     };
//   }
// }
console.log(sumNumber());

function sumNumber() {
  let addNumber = (a) => (b) => (c) => a + b + c;
  return addNumber(1)(2)(3); //화살표 함수는 반드시 선언과 정의 후에 불러줘야한다
}
