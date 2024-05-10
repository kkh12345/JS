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
