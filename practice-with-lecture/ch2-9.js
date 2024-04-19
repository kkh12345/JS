//반복문 문제 1

let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(sum);

let i = 1;
while (i <= 100) {
  sum = sum + i;
  i++;
}
console.log(sum);

//2
let odd = 0;
for (i = 0; odd <= 100; i++) {
  odd = 2 * i + 1;
  console.log(odd);
}

//4

let n = 12;
let num = true;

if (n === 1) {
  num = false;
} else {
  for (i = 2; i < n; i++) {
    if (n % i === 0) num = false;
  }
}
console.log(num);
