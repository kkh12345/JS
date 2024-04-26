//객체 초기화

// let name = 'noona';
// let age = 21;
// let cute = true;

// let person = { name, age };
// console.log(person);

//해체 destructuring
// let array = [1, 2, 3];
// let [a, b, c] = array;
// console.log(a, b, c);

// let object = {
//   A: 1,
//   B: 2,
//   C: 3,
// };

// let { A, B } = object;
// console.log(A, B);
// console.log(object);

//rest destructuring

// let person = {
//   a: 'a',
//   b: 'b',
//   c: 'c',
// };
// let { a, ...rest } = person;
// console.log(rest);
// console.log(a);

// let array = [1, 2, 3];
// let [a, ...rest] = array;
// console.log(a, rest);

//Spread
let a = [1, 2];
let b = [3, 4];
let c = [5, 6];

let result = [...a, ...b, ...c]; //... ~에 있는 내용 전부를 들고 와라
console.log(result);
console.log(a.concat(b, c));

//화살표함수:자신의 this,arguments,super을 바인딩하지 않는다. 자신만의 this를 생성하지 않고 자신을 포함하고 있는 context의 this를 이어 받는다.

// let foo = () => {
//   console.log('hello');
// };
// foo();

// let zoo = () => Date.now;
// console.log(zoo());

// let koo = (a, b) => {
//   let result = a + b;
//   return result;
// };
// console.log(koo(2, 4));

// 화살표 함수를 쓰면 안 되는 경우
const person = {
  points: 23,
  score: (let = () => {
    console.log(this.points + 1);
  }),
};
person.score();
