//for문
//구구단
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(i + '*' + j + '=' + i * j);
  }
}

let fruit = ['a', 'b', 'c', 'd'];
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}
//while문
let i = 2;
while (i < 10) {
  console.log('while문 실행', i);
  i++;
}

//예시
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i % 7 == 0) {
    console.log('7의 배수');
    break;
  }
}
