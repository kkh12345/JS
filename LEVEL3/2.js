let car2 = { name: '소나타', price: [50000, 3000, 4000] };

document.querySelectorAll(
  '.content'
)[0].innerHTML = `<p>${car2['name']}/${car2['price'][0]}</p>`;

let products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

//제목 ,가격 바꾸기

for (let i = 0; i < products.length; i++) {
  document.querySelectorAll('.card-title')[
    i
  ].innerHTML = `${products[i]['title']}`;
  document.querySelectorAll('.card-price')[
    i
  ].innerHTML = `가격 : ${products[i]['price']}`;
}

// document.querySelectorAll('select')[0].addEventListener('change', function () {
//   console.log('클릭');
//   document.querySelectorAll('select')[1].classList.remove('hide');
// });

// document.querySelectorAll('select')[0].addEventListener('input', function (e) {
//   if (this.value == '2') {
//     document.querySelectorAll('select')[1].classList.remove('hide');
//   }
//   if (this.value == '1') {
//     document.querySelectorAll('select')[1].classList.add('hide');
//   }
// });

// let a = document.createElement('p');
// a.innerHTML = '안녕';
// document.querySelectorAll('#test')[0].appendChild(a);
// let 템플릿 = '<p>안녕</p>';
// document.querySelectorAll('#test')[0].insertAdjacentHTML('beforeend', 템플릿);
// $('#test').append(템플릿);
let select0 = document.querySelectorAll('select')[0];
let select1 = document.querySelectorAll('select')[1];
let pants = [28, 30, 32];
let shirts = [95, 100, 105];
var obj = { name: 'kim', age: 20 };
for (let 작명 in obj) {
  // console.log('안녕');
  // console.log(작명);
  console.log(obj[`${작명}`]);
}
pants.forEach(function (a) {
  console.log(this);
});
$('select')
  .eq(0)
  .on('input', function () {
    console.log('event');
    if ($('select').eq(0).val() == '바지') {
      console.log(this);
      $('select').eq(1).removeClass('hide');
      $('select').eq(1).html('');
      pants.forEach(function (data, i) {
        console.log(i);
        $('select').eq(1).append(`<option>${data}</option>`);
      });
    } else if ($('select').eq(0).val() == '2') {
      $('select').eq(1).html('');
      shirts.forEach(function (data) {
        $('select').eq(1).append(`<option>${data}</option>`);
      });
    }
  });
// arrow function은 파라미터가 하나면 () 소괄호 생략해도 봐줍니다.

// 함수 중괄호 안에 return 한 줄 밖에 없으면 { } 중괄호와 return 동시에 생략해도 봐줍니다.

// 그래서 간결하니 콜백함수에 자주 사용하는 사람들이 있습니다.

// 여러분도 쓰고싶으면 쓰셈
// console.log(this);
// select0.addEventListener('input', function () {
//   console.log('event');
//   if (select0.value == '3') {
//     console.log(this);
//     select1.classList.remove('hide');
//     select1.innerHTML = '';
//     pants.forEach(function (data, i) {
//       console.log(i);
//       select1.insertAdjacentHTML('beforeend', `<option>${data}</option>`);
//     });
//   } else if ((select0.value = '2')) {
//     select1.innerHTML = '';
//     shirts.forEach(function (data) {
//       select1.insertAdjacentHTML('beforeend', `<option>${data}</option>`);
//     });
//   }
// });
//foreach 배열데이터갯수만큼 반복
//forin 객체데이터갯수만큼 반복
