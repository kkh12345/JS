//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>//
// 'use strict';

// console.log(this);

// function 함수() {
//   console.log(this);
// }
// 함수();
// console.log(window.함수);
// //window라는 오브젝트에 함수 자료를 추가하는 문법일 뿐입니다.

// let obj1 = {
//   data: 'kim',
//   간지함수: function () {
//     console.log(this);
//   }, //메소드라고 함
// };
// obj1.간지함수();

// let obj2 = {
//   data: {
//     간지함수: function () {
//       console.log(this);
//     },
//   },
// };
// obj2.data.간지함수();

//document.getElementById(), alert(), console.log()
// window 는 이런 함수들을 보관하는 보관소입니다.
// 보관소는 특별한건 아니고 그냥 큰 {오브젝트}일 뿐입니다.
//또한 여러분이 전역변수, 전역함수 만들었을 때도 이 값을 보관해줍니다.
//이렇게 변수를 큰 공간에 만드시면 x라는 변수는 window라는 큰 오브젝트안에 자동적으로 생성됩니다.

//constructor 안에서 쓰면 constructor로 새로생성되는 오브젝트를 뜻합니다.

// function 기계() {
//   this.이름 = 'kim';
//   this.나이 = '12';
// }
// let 오브젝트 = new 기계();

//이벤트리스너안의 콜백함수에서의 this는 매우 간단히 설명하면 지금 addEventListener 부착된 HTML 요소를 뜻한다고 보시면 됩니다.

//arrow function
//내부의 this값을 새로 바꿔주지 않기 때문에 this를 사용하실 때 유용합니다.
