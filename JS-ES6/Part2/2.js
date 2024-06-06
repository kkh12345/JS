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
