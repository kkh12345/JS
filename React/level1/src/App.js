// eslint-disable
//warning메세지 제거

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// html대신 JSX사용,일종의 자바스크립트

// 1-1.Class 대신 ClassName
// 1-2. 스타일을 {}안에 object 자료형으로 넣기
// 1-3 중괄호로 변수 집어넣기
// 2-1 return 태그 안에는 병렬로 태그2개이상 기입금지
// 2-2 let [name, age] = ['Kim', 20] 변수선언destructing 문법
function App() {
  let post = '강남 우동 맛집'; //변수 ,값이 변경되어도 html재렌더링안됨
  let logo = 'ReactBlog';
  let [글제목, a] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']); //state, 값이변경되면 html재렌더링, 자주변경될거같은 html부분을 state로 해놓으면 좋음
  let [like, changeLikeNum] = useState(0);

  //3-1 state 변경하는 법
  //state변경함수(새로운state)
  //3-2 onClick이벤트핸들러 onClick={함수}
  function likeClick() {
    changeLikeNum(like + 1);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'white', fontSize: '16px' }}>{logo}</h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]} <span onClick={likeClick}>👍</span> {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
