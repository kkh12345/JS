function 더하기(a, b = 임시함수()) {
  console.log(a + b);
}
//두번째 파라미터 지정 안했을때 default 10
//default 파라미터로 숫자연산, 함수도 넣기 가능
//파라미터 뺴먹었을설떄  설정한 default 파라미터가 넣어짐
더하기(...[1, 2]);
더하기(1);

function 임시함수() {
  return 15;
}

//함수의arguments : 함수의 모든 파라미터를 []안에 넣은 변수.
//array와 유사하지만 array는 아님
//옛날문법임
function 함수(임시, a, b, c, d, e, f, g) {
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
함수(1, 2, 3, 4, 5);

//만약 임시는 출력하고 싶지 않으면?
//Rest파라미터
//... spread operator도 있지만 rest파라미터라는 뜻도 있음
//rest말고 자유작명가능
//함수안에 들어온 파라미터를 전부 담은 array에 보관.
//arguments와 다른점 : 특정할수있음
function 함수2(a, b, ...rest) {
  console.log(rest);
}
//a,b제외한 뒤에파라미터만 배열에 담아줌.
//!!!!!rest는 가장 뒤에 써야한다.두번 사용 못함
함수2(1, 2, 3, 4, 5);

function 함수3(...rest) {
  rest.forEach((a) => {
    console.log(a);
  });
}
함수3(4, 403, 402, 3);
