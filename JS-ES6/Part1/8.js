//변수의 특징
//선언, 할당, 범위, 호이스팅
//var: 재선언O 재할당O 범위 function
//let : 재선언X 재할당O 범위 모든 중괄호
//const : 재선언X 재할당X 범위 모든 중괄호
//const 변수={} {}안의 값을 바꿔도 에러안남.
//왜냐하면 변수를 재할당한게 아님.안에 있는 값을 바꿨을 뿐

//아예 수정불가능한 obj을 만들고싶으면?
//Object.freeze(obj)

//호이스팅
//변수의 선언을 변수 범위 맨위로 끌고오는 현상
//함수에도 일어남. 함수의 정의 부분을 상단에서 해석

// console.log(나이);
// var 나이 = 30;
// console.log(나이);

//변수 여러개 만들기
// var 나이 = 20,
//   이름 = 'ㅇ',
//   성별 = '남';

//전역변수 :모든 곳에서 쓸 수 있는 변수
//window로 만들 수도 있음 //권장하는 방법임

// window.이름 = '김';
// window.나이 = 10;
// window.나이 = 20;

// let 더해라 = (x) => {
//   return x + 2;
// };
// 더해라(5);

// let 사람 = {
//   name: '손흥민',
//   sayHi: function () {
//     console.log(`안녕 나는 ${this.name}`);
//   },
// };
// 사람.sayHi();

// let 자료 = {
//   data: [1, 2, 3, 4, 5],
// };

// 자료.전부더하기 = function () {
//   let sum = 0;
//   this.data.forEach((data) => {
//     sum += data;
//   });
//   console.log(sum);
// };
// 자료.전부더하기();

// document.getElementById('버튼').addEventListener('click', function () {
//   let 디스 = this;
//   setTimeout(
//     () => {
//       console.log(디스.innerText);
//     },

//     1000
//   );
// });

for (var i = 0; i < document.querySelectorAll('button').length; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    document.querySelectorAll('[style]')[i].style.display = 'block';
  });
}

var 함수 = function () {
  console.log(안녕);
  var 안녕 = 'Hello!';
};
함수();

let a = 1;
var b = 2;
window.a = 3;
window.b = 4;

console.log(a + b);
//a는 let 변수로 1을 할당하고 글로벌 변수로 3을 할당했습니다.

// 이 경우 우리가 a를 사용했을 때 조금 더 범위가 작고 가까운 1을 참조해서 사용합니다.

// (자바스크립트 변수를 사용할 때 참조할만한 변수가 내 주변에 없으면 계속 상위 중괄호로 시선을 돌리면서 참조합니다.)

//tagged literal
//문자를 해체분석할수있음
//글자의 순서를 변경하고싶을떄
// let num = 123;
// let En = 'ABC';
// let A, B, C;
// function 해체분석기(문자들, 변수들, 변수들2) {
//   console.log(문자들[1] + 변수들 + 문자들[0] + 변수들2);
// }

// 해체분석기`안녕하세요${num}입니다${En}`;

var pants = 0;
var socks = 100;
`바지${pants} 양말${socks}`;

function 해체분석기(문자들, 변수1, 변수2) {
  if (변수1 === 0) {
    console.log(`${문자들[0]}안팔아요 ${문자들[1]}${변수2}`);
  }
}

해체분석기`바지${pants} 양말${socks}`;

//spread operator
//중괄호안,대괄호안,함수소괄호안에서만 쓸수있음
//1.array에 붙이면 대괄호제거해서 나열
//2.문자에 붙이면요 펼쳐줍니다.
//array를 합치거나 복사하고 싶을 떄 씀
var 어레이 = ['hello', 'world'];
console.log(...어레이);
var 문자 = 'hello';
console.log(문자[0]); //문자도 인덱싱 가능
console.log(...문자);

var num1 = [1, 2, 3];
var num2 = [4, 5];
console.log([...num1, ...num2]);

//Deep copy
//array.object는 reference data type
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
arr1[3] = 4;
console.log(arr1);
console.log(arr2);

let obj1 = { a: 1, b: 2 };
// let obj2 = { ...obj1, c: 3 };

//deep copy
obj2 = { ...obj1 };
console.log(obj2);
//카피하다가 값 중복이 일어나면??...가장 뒤에 있는 걸 적용한다.
obj2 = { ...obj1, a: 5 };
console.log(obj2);

//함수에 파라미터 넣을 떄
function 더하기(a, b, c) {
  console.log(a + b + c);
}
어레이 = [1, 2, 3];
더하기(...어레이);
더하기.apply(undefined, 어레이);

//apply함수
let person = {
  인사: function () {
    console.log(this.name + '안녕');
  },
};
person.인사();

let person2 = {
  name: '손흥민',
};
//apply,call 함수를 옮겨와서 실행해주세요
// person2.인사(); 하고싶으면?
person.인사.apply(person2, [1, 2]);
// 파라미터 arr형태 가능
person.인사.call(person2, 1, 2);
//파라미터
