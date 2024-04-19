// 변수, 자료형, 연산자

let a = 1;
let b = 2;
console.log(a, b);

let c = b;
b = a;
a = c;
console.log(a, b);

console.log(20 + 30);
console.log('Hello' + '' + 2021);
console.log('20' + '30');
console.log(1 + 2 * 3);
console.log((1 + 3) ** 2);
console.log(1 / 0);
console.log(6 % 2);
console.log(7.5 % 2);
console.log(5 == 5);
console.log(5 === 5);
console.log(5 == '5');
console.log(5 === '5');
console.log(5 != 5.0);
console.log(1201 == '120' + 1);
console.log(5 <= 5.0);
console.log(5 >= 5.0);
console.log(true || true);
console.log(true || false);
console.log(true && true);
console.log(true && false);
console.log(!true);
console.log(!false);
console.log(false == 'false');
console.log(true == 'true');
console.log(1201 == '120' + 1);
console.log('abcd' == 'abc' + 'd');

console.log('true' == true);

// 호이스팅 :
// 함수가 실행되기 전에 안에 있는 변수들을 범위의 최상단에 끌어올리는것
