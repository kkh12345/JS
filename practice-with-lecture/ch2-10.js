//369게임

for (let i = 1; i <= 50; i++) {
  let b = i % 10;
  let a = (i - b) / 10;

  if (i < 10) {
    let answer = i % 3 == 0 ? '짝' : i;
    console.log(answer);
  } else {
    if (a % 3 == 0 && b % 3 == 0) {
      console.log('짝짝');
    } else if (a % 3 == 0 || b % 3 == 0) {
      console.log('짝');
    } else {
      console.log(i);
    }
  }
}

//다른 풀이
for (let i = 1; i <= 50; i++) {
  let stringValue = i.toString();
  let result = '';
  for (let j = 0; j < stringValue.length; j++) {
    if (
      stringValue[j] === '3' ||
      stringValue[j] === '6' ||
      stringValue[j] === '9'
    ) {
      result = result + '짝';
    }
  }
  console.log(result.length > 0 ? result : i);
}
