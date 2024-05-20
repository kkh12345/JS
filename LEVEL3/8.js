//get요청
//json에서 object로 자동변환해줌
//서버와 유저는 문자만 주고받을수 있는데
//array,object자료를 문자로 바꿔준걸 json이라함
//쌩자바스크립트는 fetch, json을 받아온걸 다시 obj나 array로 바꿔주는 줄을 추가해야함

$.get('https://codingapple1.github.io/price.json')
  .done(function (data) {
    console.log(data['price']);
  })
  .fail(function () {
    console.log('실패함');
  });

fetch('https://codingapple1.github.io/price.json')
  .then((res) => res.json()) //문자를 obj,array로 바꿔줌
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//then,catch 대신 done fail써도됨

//   POST요청을 날리고 싶으면
// <form action="요청할url" method="post"> 태그 이용하면 됩니다.
// 그럼 폼이 전송되었을 때 POST요청을 날려줍니다.

let products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];
let count = 0;
let 어레이 = [7, 3, 5, 2, 50];
let 어레이2 = ['a', 'c', 'b'];
// 어레이.sort(); //문자순정렬
어레이.sort(function (a, b) {
  return a - b;
}); //숫자순정렬 오름차순
// return b-a; 내림차순

let 필터 = 어레이.filter(function (a) {
  return a < 4;
}); //원본 변형 x 변수에 담아 쓰자

let 새어레이 = 어레이.map(function (a) {
  return a * 4;
});

$('.sort').on('click', function () {
  console.log('클릭');
  products.sort(function (a, b) {
    if (a['title'] < b['title']) {
      b = 1;
      a = 0;
    } else if (a['title'] > b['title']) {
      a = 1;
      b = 0;
    }
    return b - a;
  });
  console.log(products);
  $('.card-flex').html('');
  repeat(products);
});

$('.filter').on('click', function () {
  let 필터 = products.filter(function (a) {
    return a['price'] <= 60000;
  });
  console.log(필터);
  $('.card-flex').html('');
  repeat(필터);
});

$('.price').on('click', function () {
  console.log(products);
  products.sort(function (a, b) {
    return a['price'] - b['price'];
  });
  console.log(products);
  $('.card-flex').html('');
  repeat(products);
});

$('.sort2').on('click', function () {
  products.sort(function (a, b) {
    if (a['title'] < b['title']) {
      b = 1;
      a = 0;
    } else if (a['title'] > b['title']) {
      a = 1;
      b = 0;
    }
    return a - b;
  });
  console.log(products);
  $('.card-flex').html('');
  repeat(products);
});
$('.reset').on('click', function () {
  count = 0;
  $('.card-flex+button').css('visibility', 'visible');
  $('.card-flex').html('');
  products = products.slice(0, 3);
  console.log(products);
  repeat(products);
});

$('input').on('input', function (e) {
  console.log($(e.currentTarget).val());
  products.forEach(function (data, i) {
    if ($(e.currentTarget).val() == data['price']) {
      console.log(data);
      $('.card-flex').html('');
      let 템플릿 = `<div class="card-container">
    <img
      src="https://via.placeholder.com/600"
      width="100%"
      class="card-img"
    />
    <div class="card-content">
      <h2 class="card-title">${data['title']}</h2>
      <p class="card-price">가격 : ${data['price']}</p>
      <button class="card-button">주문하기</button>
    </div>
    </div>`;
      document
        .querySelectorAll('.card-flex')[0]
        .insertAdjacentHTML('beforeend', 템플릿);
    }
  });
});

// $('.card-flex').append(템플릿)
repeat(products);

$('.card-flex+button').on('click', function () {
  count++;
  console.log(count);

  $.get(`https://codingapple1.github.io/js/more${count}.json `)

    .then((data) => {
      console.log(data);
      data.forEach(function (item, i) {
        products.push(item);
      });
      repeat(data);
    })
    .catch((error) => {
      console.log('실패');
    });
  if (count == 2) {
    count = 0;
    $('.card-flex+button').css('visibility', 'hidden');
  }
});

function repeat(array) {
  array.forEach((data, i) => {
    let 템플릿 = `<div class="card-container">
    <img
      src="https://via.placeholder.com/600"
      width="100%"
      class="card-img"
    />
    <div class="card-content">
      <h2 class="card-title">${data['title']}</h2>
      <p class="card-price">가격 : ${data['price']}</p>
      <button class="card-button">주문하기</button>
    </div>
    </div>`;
    document
      .querySelectorAll('.card-flex')[0]
      .insertAdjacentHTML('beforeend', 템플릿);
  });
}
