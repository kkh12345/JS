const callAPI = async () => {
  let url = new URI('url주소');
  let header = new Headers({ 헤더내용 }); //필요한 경우만
  let response = await fetch(url, { headers: header });
  let data = await response.json;
};
