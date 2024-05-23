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

//mousedown
//mouseup
//mousemove 요소에 마우스를 움직였을떄
let 누른좌표 = 0;
let 눌렀냐 = false;

$('.carousel-img')
  .eq(0)
  .on('mousedown', function (e) {
    누른좌표 = e.clientX;
    눌렀냐 = true;
  });

$('.carousel-img')
  .eq(0)
  .on('mousemove', function (e) {
    // e.clientX - 누른좌표;

    if (눌렀냐 === true) {
      $('.carousel-bg').css(
        'transform',
        `translateX(${e.clientX - 누른좌표}px)`
      );
    }
  });
$('.carousel-img')
  .eq(0)
  .on('mouseup', function (e) {
    눌렀냐 = false;

    if (e.clientX - 누른좌표 < -100) {
      $('.carousel-bg')
        .css('transform', `translateX(-500px)`)
        .css('transition', 'all 0.5s');
    } else {
      $('.carousel-bg')
        .css('transform', `translateX(0px)`)
        .css('transition', 'all 0.5s');
    }
    setTimeout(() => {
      $('.carousel-bg').css('transition', 'none');
    }, 500);
  });

//모바일
//touchstart
//touchmove
//touched
$('.carousel-img')
  .eq(0)
  .on('touchstart', function (e) {
    누른좌표 = e.touches[0].clientX;
    // 왜냐면 터치는 여러 손가락으로 할 수 있어서 그 중 몇번째 손가락인지 지정해줘야합니다.
    눌렀냐 = true;
  });

$('.carousel-img')
  .eq(0)
  .on('touchmove', function (e) {
    // e.clientX - 누른좌표;

    if (눌렀냐 === true) {
      $('.carousel-bg').css(
        'transform',
        `translateX(${e.touches[0].clientX - 누른좌표}px)`
      );
    }
  });
$('.carousel-img')
  .eq(0)
  .on('touchend', function (e) {
    눌렀냐 = false;
    // touchend 이벤트리스너에선 e.clientX 말고 e.changedTouches[0].clientX 쓰면 됩니다.
    if (e.changedTouches[0].clientX - 누른좌표 < -100) {
      $('.carousel-bg')
        .css('transform', `translateX(-500px)`)
        .css('transition', 'all 0.5s');
    } else {
      $('.carousel-bg')
        .css('transform', `translateX(0px)`)
        .css('transition', 'all 0.5s');
    }
    setTimeout(() => {
      $('.carousel-bg').css('transition', 'none');
    }, 500);
  });

//Hammer.js 편하게 개발하고싶으면
