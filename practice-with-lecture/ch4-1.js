console.log(document.getElementsByClassName('menu'));

////document.querySelector:id,class둘다 선택이 가능하고 좀 더 디테일한 선택이 가능함. 값이 여러개가 있을 경우 그 중에 첫번째 태그 하나만 반환한다.

//document.querySelector(#user-input")://id=user-input을 선택

//document.querySelector(".main-img")://class=main-img 선택

//document.querySelector("nav a")//nav태그 밑에 있는 a태그를 선택
console.log(document.querySelector('nav a')); //nav 태그 밑 첫번째a만선택

// if (typeof document === 'undefined') {
//   // 서버 측 코드 (document 없음)
//   console.log(0);
// } else {
//   // 클라이언트 측 코드 (document 정의됨)
//   console.log(1);
// }
