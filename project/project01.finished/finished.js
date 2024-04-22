let comNum = 0;
let goButton = document.querySelector('#go-button');
let userInput = document.querySelector('#user-input');
let resultArea = document.getElementById('result-area');
let chancesArea = document.getElementById('chances-area');
let resetButton = document.getElementById('reset-button');
let chances = 5;
let gameOver = false;
let history = [];
let instructionButton = document.getElementById('instruction-button'); //게임 설명 버튼 가져옴
let instruction = document.getElementById('instruction-text'); //설명창 가져옴
let instructionButtonCount = 0; //게임 설명 버튼 클릭 횟수
instruction.style.display = 'none'; //초기엔 설명창 안보이게 설정

goButton.addEventListener('click', Go);
resetButton.addEventListener('click', reset);
instructionButton.addEventListener('click', display); //게임 설명 버튼을 클릭했을 때 display
// userInput.addEventListener('focus', function () {
//   userInput.value = '';
// });

function display() {
  //버튼 클릭 횟수가 홀수면 보임, 짝수면 숨김
  instructionButtonCount++;
  console.log(instructionButtonCount);
  if (instructionButtonCount % 2 == 1) {
    instruction.style.display = 'block';
  } else if (instructionButtonCount % 2 == 0) {
    instruction.style.display = 'none';
  }
}

function pickRandomNum() {
  comNum = Math.floor(Math.random() * 100 + 1);
  console.log(comNum);
}

function Go() {
  userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = '1~100의 숫자를 입력하세요';

    userInput.value = '';
    return;
  }
  if (history.includes(userValue)) {
    resultArea.textContent = '이미 입력했던 숫자입니다. 다시 입력하세요';
    userInput.value = '';
    return;
  }

  //---여기까지 유효성 검증---//

  history.push(userValue);
  console.log(history);

  chances--;

  chancesArea.textContent = `기회는 ${chances} 번 남았습니다`;

  if (chances == 0 && userValue == comNum) {
    resultArea.textContent = '정답입니다';
    chancesArea.textContent = '축하합니다';
  } else if (chances == 0 && userValue !== comNum) {
    resultArea.textContent = '아쉽네요';
    chancesArea.textContent = '다시 도전해 보세요';
  } else if (userValue == comNum) {
    resultArea.textContent = '정답입니다';
    chancesArea.textContent = '축하합니다';
    gameOver = true;
  } else if (userValue > comNum) {
    resultArea.textContent = 'DOWN';
  } else if (userValue < comNum) {
    resultArea.textContent = 'UP';
  }

  if (chances == 0) {
    gameOver = true;
  }

  if (gameOver == true) {
    userInput.disabled = true;
    goButton.disabled = true;
    userInput.value = '';
  }

  userInput.value = '';
}

function reset() {
  pickRandomNum();
  gameOver = false;
  history = [];
  chances = 5;
  userInput.disabled = false;
  goButton.disabled = false;
  resultArea.textContent = '결과가 여기에 나옵니다';
  chancesArea.textContent = `기회는 ${chances} 번 남았습니다`;
  userInput.value = '';
}
pickRandomNum();
