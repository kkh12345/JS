//if문

if (false) {
  console.log('조건은 참입니다');
} else {
}
console.log('조건은 거짓입니다');

let age = 21;
if (age > 20) {
  console.log('운전이 가능합니다');
} else if (age >= 18) {
  console.log('오토바이 운전만 가능합니다');
} else {
  console.log('운전 불가능합니다');
}
//if문 조건의 순서를 지켜야함. 범위가 작은것 부터 큰 것 순으로 써야함

let licence = true;
age = 19;
if (age > 20) {
  if (!licence == true) {
    console.log('운전이 가능합니다');
  } else {
    console.log('면허를 따세요');
  }
} else {
  console.log('운전이 불가능합니다');
}
