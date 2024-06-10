//constructor(생성자)
//용도: 오브젝트를 복사하고 싶을 떄 비슷한 오브젝트 여러개 만들고싶을때
//이름은 관습적으로 대문자
//기계의 this:새로 생성되는 오브젝트(instance)
function Student(이름) {
  this.name = 이름;
  this.age = 15;
  this.sayHi = function () {
    console.log(`안녕하세요 ${this.name} 입니다`);
  };
}

let 학생1 = new Student('박');
let 학생2 = new Student('이');

// function products(이름, 가격) {
//   this.name = 이름;
//   this.price = 가격;
//   this.부가세 = function () {
//     console.log(this.price * 0.1);
//   };
// }
// const products1 = new products('shirts', 50000);
// const products2 = new products('pants', 60000);

// products1.부가세();
