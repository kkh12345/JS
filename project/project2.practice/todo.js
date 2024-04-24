//유저가 값을 입력하고
//+버튼을 누를 때마다 할 일이 추가됨

let inputTag = document.getElementById('input-tag');
let plusButtonTag = document.getElementById('plus-button');

plusButtonTag.addEventListener('click', addTask);

function addTask() {
  let userValue = inputTag.value;
}
