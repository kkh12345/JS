//textContent:노드의 text값을 반환
//innerText: 노드의 text값을 반환 textContent랑 비슷하지만 textContent는 모든 요소를 반환하는 반면 innerText는 사람이 읽을 수 있는 요소만 가져옴(글자 사이에 스페이스가 많다면 textContent는 있는 그대로가져오는 반면 innerText는 스페이스를 한 칸만 남기고 가져온다)
//innerHTML:HTML 요소 내부의 모든 콘텐츠를 문자열 형태로 가져올 수 있습니다.

let test = document.getElementById('test');
console.log(test);
console.log(test.innerText);
console.log(test.textContent);
console.log(test.innerHTML); //h1내부의 모든 콘텐츠를 문자열 형태로 반환
