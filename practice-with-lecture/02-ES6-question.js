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

//1-1
// data = names.map((item) => {
//   return item.toUpperCase();
// });
// console.log(data);

// names.forEach((items) => {
//   console.log(items);
// });

//1-3
let data = names.map((item) => {
  console.log('map실행');
  let splitName = item.split(' ');
  let initial = '';
  splitName.forEach((nameitem) => {
    initial += nameitem[0];
  });

  return initial;
});
console.log(data);

//2-1
let data2 = names.filter((item) => {
  return item.includes('M') === true;
});
console.log(data2);

//2-2********
let data3 = names.filter((item) => {
  let splitName = item.split('');
  return splitName.some((a, index) => {
    return a == splitName[index + 1];
  });
});

console.log(data3);

//3-1
let data4 = names.some((item) => item.length >= 20);
console.log(data4);

//3-2********
let data5 = names.some((item) => {
  let splitName = item.split('');
  splitName.pop();
  return splitName.some((each) => each.toLocaleLowerCase().includes('p'));
});
console.log(data5);

//4-1
let data6 = names.every((item) => item.length >= 20);
console.log(data6);

//4-2
console.log(names.every((item) => item.includes('a')));

//5-1
console.log(names.find((item) => item.length >= 1));

//6-1
console.log(names.findIndex((item) => item.length >= 20));

//6-2
console.log(names.findIndex((item) => item.length > 2));
