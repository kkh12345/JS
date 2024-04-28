const API_KEY = '20d8cf3500954187a33e0d966b42208f';
let news = [];
const getLatestNEws = async () => {
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  ); //URL이라는 인스턴스에서 다양한 필요한 함수,변수를 제공해줌
  const response = await fetch(url); //API를 fetch방식으로 부름
  console.log('rrr', response);
  const data = await response.json(); // 데이터를 json형식으로 가져와라
  console.log(data);
  // console.log('ddd', data.articles);
  news = data.articles; //뉴스 데이터 받아옴
  console.log('fff', news);
};
getLatestNEws();
