//유저가 값을 입력한다
//+버튼을 클릭하면, 할일이 추가됨
//삭제버튼을 누르면 할일이 삭제됨
//check버츤을 누르면 할일이 끝나면서 밑줄이 간다
//진행중 끝남 탭을 누르면, 언더바가 이동한다
//끝남탭은, 끝난 아이템만,진행중 아이템은 진행중인 아이템만 나온다
//전체 탭을 누르면 다시 전체 아이템으로 돌아옴
let taskInput = document.getElementById('task-input');
let addButton = document.getElementById('add-button');
let taskList = [];
let tabs = document.querySelectorAll('.task-tabs div');

addButton.addEventListener('click', addTask);

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function (event) {
    filter(event);
  });
}

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };

  taskList.push(task);
  // console.log(taskList);
  render();
}

function render() {
  let resultHTML = '';
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHTML += `<div class="task">
<div class='task-done'>${taskList[i].taskContent}</div>
<div>
  <button onclick="toggleComplete('${taskList[i].id}')">체크</button>
  <button onclick="deleteTask('${taskList[i].id}')">삭제</button>
</div>
</div>`;
    } else {
      resultHTML += `<div class="task">
      <div >${taskList[i].taskContent}</div>
      <div>
        <button onclick="toggleComplete('${taskList[i].id}')">체크</button>
        <button onclick="deleteTask('${taskList[i].id}')">삭제</button>
      </div>
    </div>`;
    }
  }

  document.getElementById('task-board').innerHTML = resultHTML;
}

function toggleComplete(id) {
  console.log('id', id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break; //for문 종료
    }
  }
  console.log(taskList);
  render();
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
}

function filter(event) {
  console.log('filter', event.target.id);
}

function randomIDGenerate() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
