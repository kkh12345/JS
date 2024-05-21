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
      <button class="buy">구매</button>
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
      <button class="buy">구매</button>
      
    </div>
    </div>`;
    document
      .querySelectorAll('.card-flex')[0]
      .insertAdjacentHTML('beforeend', 템플릿);
  });
}

// 변수의 단점
// 새로고침 시 초기값으로 변함.
// localStorage.setItem('나', '바보');
// console.log(localStorage.getItem('나'));
// localStorage.removeItem('나');
// localStorage.setItem('num', '[1,2,3,4]');
// let arr = [1, 23, 2, 2312, 3, 3];

// let newArr = JSON.stringify(arr); //Json 형식으로 바꿔줌
// localStorage.setItem('num2', newArr);
// let 꺼낸거 = localStorage.getItem('num2');
// console.log(JSON.parse(꺼낸거));
// localStorage.removeItem('num');

//방법1
// products.forEach(function (data, i) {
//   $('.buy')
//     .eq(i)
//     .on('click', function () {
//       if (localStorage['length'] == 0) {
//         console.log('비어있음');
//         console.log(data);
//         localStorage.setItem('cart', JSON.stringify([data['title']]));
//       } else {
//         console.log('비어있지않음');
//         let getItem = localStorage.getItem('cart');
//         console.log(getItem);
//         let getItemParse = JSON.parse(getItem);
//         getItemParse.push(data['title']);
//         let setItem = JSON.stringify(getItemParse);
//         localStorage.setItem('cart', setItem);
//       }
//     });
// });

//방법2
//구매버튼누르면
//내 윗 제목 요소의 내용을 가져와서
//비었을경우
//[내용]을 JSON으로 변경 후에
//localstorage에 저장
//빈 배열이 아닌 경우는
//localstarage의 cart를 가져와서
//parse후 push하고 다시stringfy 후 localstrage에 넣음
products.forEach(function (data, i) {
  $('.buy')
    .eq(i)
    .on('click', function (e) {
      let itemObj = {
        title:
          e.target.previousElementSibling.previousElementSibling
            .previousElementSibling.innerHTML,
        num: 1,
      };
      if (localStorage['length'] == 0) {
        console.log('비었음');
        localStorage.setItem('cart', JSON.stringify([itemObj]));
      } else {
        console.log('안비었음');
        let getCart = JSON.parse(localStorage.getItem('cart'));
      }
    });
});
