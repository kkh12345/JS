// document.querySelectorAll('.page1')[0].addEventListener('click', function () {
//   console.log('클릭');
//   document.querySelectorAll('.carousel-bg')[0].style.transform =
//     'translateX(0)';
// });

// document.querySelectorAll('.page2')[0].addEventListener('click', function () {
//   console.log('클릭');
//   document.querySelectorAll('.carousel-bg')[0].style.transform =
//     'translateX(-500px)';
// });

// document.querySelectorAll('.page3')[0].addEventListener('click', function () {
//   console.log('클릭');
//   document.querySelectorAll('.carousel-bg')[0].style.transform =
//     'translateX(-1000px)';
// });.
let 현재위치 = 0;

$('.page1').on('click', function () {
  $('.carousel-bg').css('transform', 'translateX(0)');
  현재위치 = 0;
  console.log(현재위치);
});

$('.page2').on('click', function () {
  $('.carousel-bg').css('transform', 'translateX(-500px)');
  현재위치 = -500;
  console.log(현재위치);
});

$('.page3').on('click', function () {
  $('.carousel-bg').css('transform', 'translateX(-1000px)');
  현재위치 = -1000;
  console.log(현재위치);
});

// document.querySelectorAll('.next')[0].addEventListener('click', function () {
//   console.log('click');
//   현재위치 -= 500;
//   console.log(현재위치);
//   document.querySelectorAll(
//     '.carousel-bg'
//   )[0].style.transform = `translateX(${현재위치}px)`;
// });

// document.querySelectorAll('.before')[0].addEventListener('click', function () {
//   console.log('click');
//   if (현재위치 == 0) {
//     현재위치 == 0;
//   } else {
//     현재위치 += 500;
//   }
//   console.log(현재위치);
//   document.querySelectorAll(
//     '.carousel-bg'
//   )[0].style.transform = `translateX(${현재위치}px)`;
// });

$('.next').on('click', function () {
  console.log('click');
  현재위치 -= 500;
  $('.carousel-bg').css('transform', `translateX(${현재위치}px)`);
  console.log(현재위치);
});

$('.before').on('click', function () {
  console.log('click');
  if (현재위치 == 0) {
    현재위치 == 0;
  } else {
    현재위치 += 500;
  }
  $('.carousel-bg').css('transform', `translateX(${현재위치}px)`);
  console.log(현재위치);
});
