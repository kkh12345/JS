//1, 2, 3

function greet(name) {
  // console.log('"안녕 내 이름은 ', name + '야"');
  return name;
}
console.log(greet('kkh'));

//4
function meetAt(year, month, date) {
  if (date) {
    return year + '/' + month + '/' + date;
  }
  if (month) {
    return year + '년' + month + '월';
  }
  if (year) {
    return year + '년';
  }
}
console.log(meetAt(2022));
console.log(meetAt(2032, 3));
console.log(meetAt(1987, 10, 28));

//5
function findSmallestElement(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let result = arr[0];
    for (i = 1; i < arr.length; i++) {
      result = result > arr[i] ? arr[i] : result;
    }
    return result;
  }
}
console.log(findSmallestElement([100, 200, 3, 1000, 2, 1]));

//6
// 12300
// 50000*0
// 10000*1 2300
// 5000*0
// 1000*2 300
// 500*0
// 100*3  0

let unit = [50000, 10000, 5000, 1000, 500, 100];
function give(money) {
  for (let i = 0; i < unit.length; i++) {
    let num = Math.floor(money / unit[i]);
    console.log(`${unit[i]}X${num}`);
    money = money - unit[i] * num;
  }
}
give(12300);
