const API_KEY = '20d8cf3500954187a33e0d966b42208f';
let newsList = [];
const menus = document.querySelectorAll('.menus button ');

menus.forEach((menu) =>
  menu.addEventListener('click', (event) => getNewsByCategory(event))
);

const getLatestNEws = async () => {
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  ); //URL이라는 인스턴스에서 다양한 필요한 함수,변수를 제공해줌
  const response = await fetch(url); //API를 fetch방식으로 부름
  console.log('rrr', response);
  const data = await response.json(); // 데이터를 json형식으로 가져와라
  console.log(data);
  // console.log('ddd', data.articles);

  newsList = data.articles; //뉴스 데이터 받아옴
  render();
  console.log('fff', newsList);
};

const getNewsByCategory = async (event) => {
  const category = event.target.textContent.toLowerCase();
  console.log('category', event.target);
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
  );
  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles;
  render();
  console.log('fff', newsList);
};

const render = () => {
  const newsHTML = newsList
    .map((item) => {
      return `<div class="row">
  <div class="col-lg-4"><img class="news" src=${
    item.urlToImage
  } alt="" onerror="this.src='https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available_87543-11093.jpg'"/></div>
  <div class="col-lg-8">
    <h2>${item.title}</h2>
    <p>${
      item.description == null || item.description == ''
        ? '내용없음'
        : item.description.length > 200
        ? item.description.substring(0, 200) + '...'
        : item.description
    }</p>
    <div>${item.source.name || 'no source'}*${moment(
        item.publishedAt
      ).fromNow()}</div>
  </div>
</div>`;
    })
    .join('');

  document.getElementById('news-board').innerHTML = newsHTML;
};
getLatestNEws();

//문제점
//배열에 , 가 있기 떄문에 ,까지 프린트가 된다.
//해결방법: join('')이용하여 ,를문자열로바꿔준다.

//버튼들에 클릭이벤트주기
//카테고리별 뉴스 가져오기
//그 뉴스를 보여주기
