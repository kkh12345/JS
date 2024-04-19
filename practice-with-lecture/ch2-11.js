let fruit = ['apple', 'mango', 'strawberry', 'pineapple'];
let sentence = '코딩을 좋아해';
// for (let i = 0; i < fruit.length; i++) {
//   console.log('좋아하는 과일은', fruit[i]);
// }

//for ... of
for (let item of fruit) {
  console.log('좋아하는 과일은 of', item);
}
for (let char of sentence) {
  console.log('char', char);
}

let person = {
  name: 'kkh',
  age: 28,
  cute: true,
};

//for ...in
for (let key in person) {
  console.log('key', key);
  if (key === 'cute') {
    console.log(person[key]);
  }
}

for (let key in fruit) {
  console.log(key);
}
