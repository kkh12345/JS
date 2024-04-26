//배열 함수
let names = [
  'Steven Paul JObs',
  'Bill Gates',
  'Mark Elliot Zuckerberg',
  'Elon Musk',
  'Jeff Bezos',
  'Warren Edward Buffett',

  'Larry Page',
  'Larry Ellison',
  'Tim Cook',
  'Lloyd Blankfein',
];

//1
// data = names.map((item) => {
//   return item.toUpperCase();
// });
// console.log(data);

data2 = names.map((item) => {
  return item.split(' ')[0];
});
console.log(data2);

//배열의 index를 접근하듯 대괄호([])와 index를 활용해, 특정 index의 문자를 읽을 수 있다.
