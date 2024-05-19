let 출석부 = ['흥민', '영희', '철수', '철수', '재석'];

function 이름찾기(이름) {
  for (let i = 0; i < 출석부.length; i++) {
    if (이름 == 출석부[i]) {
      console.log(이름);
      return;
    }
  }
}

//구구단
for (let j = 1; j <= 9; j++) {
  for (let i = 1; i <= 9; i++) {
    console.log(j * i);
  }
}
//평균점수 계산기
function 성적변화(기존성적, 최근성적) {
  let sum = 0;
  let 평균 = 0;

  기존성적.forEach(function (data) {
    sum += data;
    평균 = sum / 기존성적.length;
  });

  console.log(기존성적.length);
  console.log(sum);
  console.log(평균);
  if (최근성적 > 평균) {
    console.log(`평균보다${최근성적 - 평균}점이 올랐네요`);
  } else if (최근성적 < 평균) {
    console.log(`평균보다${평균 - 최근성적}점이 떨어졌네요 재수추천`);
  } else {
    console.log('성적이 그대로입니다');
  }
}
