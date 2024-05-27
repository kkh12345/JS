document.querySelector('.nav-menu').addEventListener('click', 리스트보여줘);

function 리스트보여줘() {
  document.querySelectorAll('.nav-menu-list')[0].classList.toggle('show');
}

// css선택자를 이용한 셀렉터
console.log(document.querySelector('.nav-menu-line'));
// 맨 위에 하나만 찾아줌
console.log(document.querySelectorAll('.nav-menu-line'));
//전부찾아줌. 반드시 인덱싱해야함 원하는 요소 선택가능

// Class 부착식으로 개발도 가능

// .classList.toggle() 쓰면

// - 클래스명이 있으면 제거하고

// - 클래스명이 없으면 붙여줍니다.
