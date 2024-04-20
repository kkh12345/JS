let comNum = 0;
let userInput = document.getElementById('user-input');
let goButton = document.getElementById('go-button');
let resultArea = document.getElementById('result-area');
let chances = 5; //남은기회
let chancesArea = document.getElementById('chances-area');
let gameOver = false;
let history = [];
let resetButton = document.querySelector('#reset-button');

goButton.addEventListener('click', Go);
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', function () {
  userInput.value = '';
});

function pickRandomNum() {
  comNum = Math.floor(Math.random() * 100 + 1);
  console.log(comNum);
}
pickRandomNum();

function Go() {
  userValue = userInput.value;

  if (history.includes(userValue)) {
    resultArea.textContent = '이미 입력한 숫자입니다. 다른 숫자를 입력하세요';
    return;
  }

  if (userValue > 100 || userValue < 1) {
    resultArea.textContent = '1~100의 숫자를 입력하세요';
    return;
  }

  history.push(userValue);
  console.log(history);

  chances--;
  chancesArea.textContent = `기회는 ${chances} 번 남았습니다`;

  if (userValue == comNum) {
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
    goButton.disabled = true;
  }
}

function reset() {
  chances = 5;
  resultArea.textContent = ' 결과가 여기 나옵니다.';
  chancesArea.textContent = `기회는 ${chances} 번 남았습니다`;
  history = [];
  pickRandomNum();
  userInput.value = '';
  goButton.disabled = false;
  gameOver = false;
}
