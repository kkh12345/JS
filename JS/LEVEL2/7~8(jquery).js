let 메뉴 = $('.list');
let 내용 = $('.tap-content');

// for (let i = 0; i < 메뉴.length; i++) {
//   메뉴.eq(i).on('click', function () {
//     탭열기(i);
//   });
// }
// 이벤트버블링을 응용해 이벤트리스너1개로해보자
// 이벤트리스너로 인해 사용하는 ram줄여줌
$('.tap-menu').click(function (o) {
  // if ($(e.target).is(메뉴.eq(0))) {
  //   탭열기(0);
  // }
  // if ($(e.target).is(메뉴.eq(1))) {
  //   탭열기(1);
  // }
  // if ($(e.target).is(메뉴.eq(2))) {
  //   탭열기(2);
  // }

  // for (let i = 0; i < 메뉴.length; i++) {
  //   if ($(e.target).is(메뉴.eq(i))) {
  //     탭열기(i);
  //   }
  // }
  // console.log(typeof Number(e.target.dataset.id));
  // 탭열기(Number(e.target.dataset.id));
  console.log(typeof Number($(o.target).data('id')));
  탭열기(Number($(o.target).data('id')));
});

function 탭열기(index) {
  메뉴.removeClass('orange');
  메뉴.eq(index).addClass('orange');
  내용.removeClass('show');
  내용.eq(index).addClass('show');
}

$('.modal-open-button').on('click', function () {
  $('.modal-display').addClass('show');
});
$('.modal-close-button').on('click', function () {
  $('.modal-display').removeClass('show');
});

document
  .querySelectorAll('.modal-id')[0]
  .addEventListener('change', function () {
    console.log('hi');
  });

$('.modal-black').on('click', function (e) {
  console.log('e.target :', $(e.target));
  console.log($('.modal-black'));
  // console.log('e.currentTarget', e.currentTarget);

  if ($(e.target).is($('.modal-black'))) {
    $('.modal-display').removeClass('show');
  }
});

// 그래서 오늘의 결론

// 1. 이벤트 버블링은 항상 일어난다

// 2. 이벤트 관련 유용한 함수들을 사용가능하다

// 잘 기억해두면 됩니다.

// 이벤트버블링 조심
// e.target; //유저가 실제로 누른거 알려줌
// e.currentTarget; //이벤트리스너 달린 곳 알려줌

// e.preventDefault(); //기본 동작같은거 막아주세요(form안에submit같은)
// e.stopPropagation(); //내 상위요소로 이벤트 버블링(퍼지는거,번식) 막아줌

// dataset 문법 (잡기술)

// <div data-데이터이름="값"></div>
// html 안에 유저 몰래 정보를 숨겨놓을 수 있습니다.

// 데이터이름 아무렇게나 작명하고 값도 넣으면 됩니다.

// 일반 유저들은 모름

// document.querySelector().dataset.데이터이름;
//$().data('데이터이름')
// 이러면 html 요소에 숨겨놨던 데이터가 이 자리에 남습니다.

// 출력해보면 진짜로 아까 숨겨놓은 값이 남습니다.
