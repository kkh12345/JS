let car2 = { name: '소나타', price: [50000, 3000, 4000] };

document.querySelectorAll(
  '.content'
)[0].innerHTML = `<p>${car2['name']}/${car2['price'][0]}</p>`;

let products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

//제목 바꾸기

for (let i = 0; i < products.length; i++) {
  document.querySelectorAll('.card-title')[
    i
  ].innerHTML = `${products[i]['title']}`;
}

//가격 바꾸기
for (let i = 0; i < products.length; i++) {
  document.querySelectorAll('.card-price')[
    i
  ].innerHTML = `가격 : ${products[i]['price']}`;
}
