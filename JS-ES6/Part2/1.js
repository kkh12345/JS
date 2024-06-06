//apply.call

// let 어레이 = [10, 20, 30];

// function 더하기(a, b, c) {
//   console.log(a + b + c);
// }
// // 더하기(...어레이);
// 더하기.apply(undefined, 어레이);

// let person = {
//   인사: function (a, b, c) {
//     console.log(this.name + '안녕' + a + b + c);
//   },
// };
// let person2 = {
//   name: '손흥민',
// };

// person.인사.apply(person2, [3, 1, 2]);
// person.인사.call(person2, 1, 2, 3);

//default파라미터
// function 더하기(a, b = 임시함수()) {
//   console.log(a + b);
// }
// 더하기(1);

// function 임시함수() {
//   return 15;
// }
//arguments
// function 함수(a, b, c) {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// 함수(1, 2, 3);

//rest
//마지막 파라미터로 넣어야함.2개이상 사용못함
// function 함수2(...파라미터들) {
//   파라미터들.forEach((a) => {
//     console.log(a);
//   });
// }
// 함수2(1, 2, 3, 4, 5, 5);

//연습문제
//-1-
// let a = [1, 2, 3];
// let b = '김밥';
// let c = [...b, ...a];
// console.log(c);

//-2-
// let a = [1, 2, 3];
// let b = ['you', 'are'];
// let c = function (a, b) {
//   console.log([[...a], ...[...b]][1]);
//   console.log('you');
// };
// c(a, b);

//-3,4-
// let 함수 = function (a = 5, b = a * 2) {
//   console.log(a + b);
//   return 10;
// };
// 함수(undefined, undefined);

//5
// let newArray = 어레이(1, 2, 3, 4, 5);
// function 어레이(...rest) {
//   return rest;
// }
// console.log(newArray);

//6
// let numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
// let max = Math.max(...numbers);
// console.log(max);

//7
// function 정렬(a) {
//   console.log(...[...a].sort());
// }
// 정렬('bear');

//8
// function 글자세기(string) {
//   let 결과 = {};
//   let 해체배열 = [...string];
//   해체배열.forEach((a) => {
//     if (결과[a] > 0) {
//       결과[a]++;
//     } else {
//       결과[a] = 1;
//     }
//     console.log(결과);
//   });
// }
// 글자세기('aacbbb');
