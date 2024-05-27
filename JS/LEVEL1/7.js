// document.querySelector('.hello').innerHTML = '바보';

// $('.hello').html('바보');

// document.querySelectorAll('.hello')[0].innerHTML = '바보';
// document.querySelectorAll('.hello')[1].innerHTML = '바보';
// document.querySelectorAll('.hello')[2].innerHTML = '바보';
// $('.hello').html('바보'); 한번에 다 바꿔줌

// document.querySelector('button').addEventListener('click', function () {
// });

// $('button').on('click', function () {
// $('.hello').hide();
// $('.hello').fadeOut();
//   $('.hello').slideUp();
// });

$('.modal-open-button').on('click', function () {
  $('.modal-display').addClass('show');
});
$('.modal-close-button').on('click', function () {
  $('.modal-display').removeClass('show');
});

// confirm('hi');
// prompt('h1', 100);
// alert('안녕하세요');

// 전송버튼누르면
// 저기 input에 입력한 값이 공백이면 알림창띄우셈

// document
//   .getElementsByClassName('modal-submit-button')[0]
//   .addEventListener('click', inputNull);

// function inputNull() {
//   let idValue = document.getElementsByClassName('modal-id')[0].value;
//   let pwValue = document.getElementsByClassName('modal-pw')[0].value;
//   if (idValue.length == 0 && pwValue.length == 0) {
//     alert('id/pw둘다입력하셈');
//   } else if (idValue.length == 0) {
//     alert('id를입력하셈');
//   } else if (pwValue.length == 0) {
//     alert('pw를입력하셈');
//   }
// }

// $('form').on('submit', inputNull);

// function inputNull(e) {
//   let idValue = $('.modal-id').val();
//   let pwValue = $('.modal-pw').val();
//   if (idValue.length == 0 && pwValue.length == 0) {
//     e.preventDefault(); //폼전송막기
//     alert('id/pw둘다입력하셈');
//   } else if (idValue.length == 0) {
//     e.preventDefault();
//     alert('id를입력하셈');
//   } else if (pwValue.length == 0) {
//     e.preventDefault();
//     alert('pw를입력하셈');
//   } else if (pwValue.length < 6) {
//     alert('6자리이상입력하셈');
//     e.preventDefault();
//   }
// }

/* <input> 태그에서 발생하는 이벤트들이 있습니다.
input이벤트와 change 이벤트인데 <input> 안에 뭔가 입력할 때 발생합니다. 
 */
// ▲ <input>에 입력된 값이 변경될 때 input 이벤트가 발생합니다.

// <input>에 뭐 입력해보십시오 그 때마다 콘솔창에 안녕이 출력되는군요.
// ▲ <input>에 입력된 값이 변경되고 커서를 다른 곳에 찍으면 change 이벤트가 발생합니다.

// <input>에 뭐 입력하고 커서를 다른데 찍어보십시오. 안녕이 출력됩니다.

document
  .querySelectorAll('.modal-id')[0]
  .addEventListener('change', function () {
    console.log('hi');
  });

if (0) {
  console.log(1);
}

// 0
// ''
// null
// undefined
// NaN
// 이런 것들은 if문 소괄호 안에서 false랑 같은 역할을 합니다.

// 0제외 모든 숫자
// '아무문자'
// []
// {}
// 이런 것들은 if문 소괄호 안에서 true랑 같은 역할을 합니다.
