//if문 연습

//유저가 입력하는 숫자가 0인지 음수인지 양수인지 판단하는 프로그램을 만드시오

let num = 0;

if (num == 0) {
  console.log('0입니다');
} else if (num > 0) {
  console.log('양수입니다');
} else {
  console.log('음수입니다');
}

//나는 대학교 교수다.레포트 점수에 따라 등급을 매기는 프로그램을 만드시오.

let score = 55;

if (score <= 100 && score >= 90) {
  console.log('A');
} else if (score >= 80 && score < 90) {
  console.log('B');
} else if (score >= 70 && score < 80) {
  console.log('C');
} else if (score >= 60 && score < 70) {
  console.log('D');
} else {
  console.log('F');
}

//3번문제
let skills = ['HTML', 'CSS'];
if (skills.includes(skills[2 && 3])) {
  console.log('합격');
} else if (skills.includes(skills[2 || 3])) {
  console.log('예비');
} else {
  console.log('탈락');
}
