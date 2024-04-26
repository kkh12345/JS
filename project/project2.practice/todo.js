//유저가 값을 입력하고
//+버튼을 누를 때마다 할 일이 추가됨
//체크 버튼을 누르면 line-through, 배경색 바뀜
//삭제 버튼을 누르면 박스가 사라짐
//전체 탭을 누르면 전체할일을 보여줌
//진행중 탭을 누르면 userValue.check=false인 아이템만 보여줌
//끝남 탭을 누르면 userValue.check=true인 아이템만 보여줌

let inputTag = document.getElementById('input-tag');
let plusButton = document.getElementById('plus-button');
let isComplete = false;
let userValue = [];
let userObject = {};
let taps = document.querySelectorAll('ul li');
let mode = 'all';
let sum = [];
let list = [];

for (i = 0; i < taps.length - 1; i++) {
  taps[i].addEventListener('click', function (event) {
    filter(event);
  });
}

plusButton.addEventListener('click', addTask);

function inputNull() {
  if (inputTag.value.length == 0) {
    plusButton.disabled = true;
  } else {
    plusButton.disabled = false;
  }
}

function handleOnInput(el, maxLength) {
  if (el.value.length > maxLength) {
    el.value = el.value.substr(0, maxLength);
  }
} //글자수조정

function addTask() {
  userObject = {
    id: Math.random(),
    check: isComplete,
    Value: inputTag.value,
  };

  userValue.push(userObject);
  console.log(userValue);
  render();
  inputTag.value = null;
}

function render() {
  list = [];
  if (mode == 'all') {
    list = userValue;
  } else if (mode === 'ongoing' || mode === 'done') {
    list = sum;
  }

  let result = '';

  for (i = 0; i < list.length; i++) {
    if (list[i].check === true) {
      result += `<div class="task-container checked-background" id="task-container">
    <div id="checked-text">${list[i].Value}</div>
    <div class="button-area">
      <button  onclick="check(${list[i].id})">체크</button>
      <button onclick="deleteButton(${list[i].id})">삭제</button>
    </div>
  </div>`;
    } else if (list[i].check === false) {
      result += `<div class="task-container" id="task-container">
    <div>${list[i].Value}</div>
    <div class="button-area">
      <button  onclick="check(${list[i].id})">체크</button>
      <button onclick="deleteButton(${list[i].id})">삭제</button>
    </div>
  </div>`;
    }
  }

  document.getElementById('task-box').innerHTML = result;
}

function check(id) {
  for (let i = 0; i < userValue.length; i++) {
    if (id === userValue[i].id) {
      userValue[i].check = !userValue[i].check;
      console.log(userValue[i].check);
      break;
    }
  }
  console.log(userValue);
  render();
}

function deleteButton(id) {
  for (i = 0; i < userValue.length; i++) {
    if (userValue[i].id === id) {
      userValue.splice(i, 1);
      filterAction(mode); //////////////
    }
  }
  console.log(userValue);

  render();
}

function filter(event) {
  // console.log(event.target.id);
  mode = event.target.id;
  filterAction(mode);
}

function filterAction(mode) {
  sum = [];
  if (mode == 'all') {
    render();
  } else if (mode === 'ongoing') {
    for (let i = 0; i < userValue.length; i++) {
      if (userValue[i].check === false) {
        sum.push(userValue[i]);
      }
    }
    console.log(sum);
    render();
  } else if (mode === 'done') {
    for (let i = 0; i < userValue.length; i++) {
      if (userValue[i].check === true) {
        sum.push(userValue[i]);
      }
    }
    render();
  }
}
