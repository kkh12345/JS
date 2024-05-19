//get요청
//json에서 object로 자동변환해줌
//서버와 유저는 문자만 주고받을수 있는데
//array,object자료를 문자로 바꿔준걸 json이라함
//쌩자바스크립트는 fetch, json을 받아온걸 다시 obj나 array로 바꿔주는 줄을 추가해야함

$.get('https://codingapple1.github.io/price.json')
  .then(function (data) {
    console.log(data['price']);
  })
  .catch(function () {
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

// $('.card-flex').append(템플릿)
for (let i = 0; i < products.length; i++) {
  let 템플릿 = `<div class="card-container">
        <img
          src="https://via.placeholder.com/600"
          width="100%"
          class="card-img"
        />
        <div class="card-content">
          <h2 class="card-title">${products[i]['title']}</h2>
          <p class="card-price">가격 : ${products[i]['price']}</p>
          <button class="card-button">주문하기</button>
        </div>
      </div>`;

  document
    .querySelectorAll('.card-flex')[0]
    .insertAdjacentHTML('beforeend', 템플릿);
}
