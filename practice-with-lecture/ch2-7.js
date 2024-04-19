//switch문
// case가 값으로 딱 정해진 경우에만 사용가능
let food = '햄버거';
switch (food) {
  case '피자':
    console.log('피자를 주세요');
    break;
  case '햄버거':
    console.log('햄버거를 주세요');

  default:
    console.log('메뉴에 없는 음식입니다.');
}

//case마다 break를 안써주면 break문을 만나기 전까지의 모든 동작을 실행한다.

//삼항 연산자
//if문을 간단하게 표현

console.log(food);
let answer = food == '햄버거' ? '햄버거 좋아' : '햄버거 싫어';
console.log(answer);

//연산식을 붙여서 더 많은 조건 표현도 가능
console.log(food);
if (food == '피자') {
  console.log('피자좋아');
} else if (food == '햄버거') {
  console.log('햄버거 좋아');
} else {
  console.log('다 싫어');
}
//위의 if문을 삼항연산자로 표현하면
let answer2 =
  food == '피자' ? '피자좋아' : food == '햄버거' ? '햄버거 좋아' : '다 싫어';
console.log(answer2);
