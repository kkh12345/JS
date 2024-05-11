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

$('form').on('submit', inputNull);

function inputNull(e) {
  let idValue = $('.modal-id').val();
  let pwValue = $('.modal-pw').val();
  if (idValue.length == 0 && pwValue.length == 0) {
    e.preventDefault(); //폼전송막기
    alert('id/pw둘다입력하셈');
  } else if (idValue.length == 0) {
    e.preventDefault();
    alert('id를입력하셈');
  } else if (pwValue.length == 0) {
    e.preventDefault();
    alert('pw를입력하셈');
  } else if (pwValue.length < 6) {
    alert('6자리이상입력하셈');
    e.preventDefault();
  }
}
