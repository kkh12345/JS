//문제

//1

// 주어진 숫자가 3의 배수 : 짝
// 주어진 숫자가 3의 배수가 아님: 아무것도안함
// 주어진 숫자가 9의 배수: 박수를 두번 쳐야함.
function 삼육구게임(숫자) {
  if (숫자 % 9 == 0) {
    console.log('짝짝');
  } else if (숫자 % 3 == 0) {
    console.log('짝');
  } else {
    console.log('통과');
  }
}
삼육구게임(11);

//3
// 1차시험:개론 2차시험 : 민법
//두 과목 합해서 120점이상:합격=120점미만은 불합
//한 과목이 40점 미만이면 과락으로 불합격

function 점수(개론점수, 민법점수) {
  if (개론점수 + 민법점수 < 120) {
    console.log('불합격');
  } else if (개론점수 < 40 || 민법점수 < 40) {
    console.log('불합격');
  } else {
    console.log('합격');
  }
}
점수(70, 70);
점수(30, 100);
점수(50, 50);

//4
//끝자리가 3,6,9,로 끝나면 박수
function 박수(숫자) {
  str = 숫자.toString();
  console.log(str.charAt(str.length - 1));
  if (
    str.charAt(str.length - 1) === '3' ||
    str.charAt(str.length - 1) === '6' ||
    str.charAt(str.length - 1) === '9'
  ) {
    console.log('짝');
  }
}
박수(123219);

//5
function 합격판독기(숫자) {
  if (숫자 < 0 || 숫자 > 100) {
    console.log('장난치지마셈');
  }
}
합격판독기(101);
합격판독기(-1);
