//랜덤번호지정
//유저가 숫자 입력 그리고 go라는 버튼을 누른다
//랜덤번호>유저번호 Up
//랜덤번호<유저번호 Dowm
//Reset버튼을 누르면 게임이 리셋된다
//5번의 기회를 다 쓰면 게임이 끝난다(더이상 추측(입력) 불가, 버튼이 disable)
//유저가 1~100이외의 숫자를 입력하면 알려준다. 기회를 깎지 않음
//유저가 이미 입력한 숫자를 또 입력하면 알려준다, 기회를 깎지 않음

//Math.floor() 소수점 버림
//Math.random() 0부터 1 사이 난수생성
let computerNum = 0;

function pickRandom() {
  computerNum = Math.floor(Math.random() * 100 + 1); //+1을 해주는 이유는 0을 제외해주고 100을 포함시키기위해
  console.log(computerNum);
}

//버튼을 클릭했을 때 이벤트
let PlayButton = document.getElementById('play-button');

//유저가 숫자를 입력
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');

PlayButton.addEventListener('click', play); //함수를 변수처럼 넘길땐 ()뺴줘야함
userInput.addEventListener('focus', function () {
  userInput.value = '';
});
//5번의 기회
let chances = 5;
let gameOver = '';

let chanceArea = document.getElementById('chance-area');
let history = []; // 유저가 입력한 값 히스토리

//play 함수 만들기
function play() {
  let userValue = userInput.value;
  if (userValue > 100 || userValue < 1) {
    resultArea.textContent = '1과 100 사이의 숫자를 입력하세요';

    userInput.value = '';

    return; //종료
  }

  if (history.includes(userValue)) {
    resultArea.textContent = '이미 입력한 숫자입니다. 다른 숫자를 입력하세요';
    userInput.value = '';
    return;
  }

  //--------이 줄까지유효성 검사----------//

  history.push(userValue);
  console.log(history);

  chances--; //기회 1번씩 줄어듦
  chanceArea.textContent = `기회는${chances}번 남았습니다`;

  if (userValue < computerNum) {
    resultArea.textContent = 'UP!!';
  } else if (userValue > computerNum) {
    resultArea.textContent = 'DOWN!!';
  } else {
    resultArea.textContent = '정답입니다';
    PlayButton.disabled = true;
  }

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver === true) {
    PlayButton.disabled = true;
  }
  // userInput.value = '';
}
play();

//리셋 버튼 만들기
let reset = document.getElementById('reset-button');
reset.addEventListener('click', resetFunc);

function resetFunc() {
  pickRandom(); //새로운 랜덤번호
  userInput.value = ''; //input창 비우기
  resultArea.textContent = '결과값이 여기 나옵니다';
}
resetFunc();
