// eslint - disable;
//warning메세지 기능 끔

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
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]); //state, 값이변경되면 html재렌더링, 자주변경될거같은 html부분을 state로 해놓으면 좋음
  let [like, changeLikeNum] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let modalClick = 0;
  //3-1 state 변경하는 법
  //state변경함수(새로운state)
  //3-2 onClick이벤트핸들러 onClick={함수}
  let likeClickNum = (i) => {
    let copy = [...like];
    copy[i] = copy[i] + 1;
    changeLikeNum(copy);
  };

  let [target, setTarget] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'white', fontSize: '16px' }}>{logo}</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
          console.log(copy);
        }}
      >
        버튼
      </button>
      <button
        className="sort"
        onClick={() => {
          let copy = [...글제목];
          let sort = copy.sort((a, b) => {
            if (a == b) {
              return 0;
            } else if (a < b) {
              return -1;
            } else {
              return 1;
            }
          });
          console.log(글제목, sort);
          글제목변경(sort);
        }}
      >
        가나다순정렬
      </button>
      {/* <div className="list">
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
        <h4
          onClick={() => {
            modalClick++;
            if (modalClick % 2 != 0) {
              setModal(true);
            } else {
              setModal(false);
            }
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        //중괄호안엔 for반복문 못씀
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4
                onClick={() => {
                  modalClick++;
                  if (modalClick % 2 != 0) {
                    setModal(true);
                  } else {
                    setModal(false);
                  }
                  console.log(i);
                  setTarget(i);
                  console.log(target);
                }}
              >
                {글제목[i]}
              </h4>
              <span onClick={() => likeClickNum(i)}>👍</span> {like[i]}
              <p>2월 17일 발행</p>
            </div>
          );
        })
      }
      {
        //html중간에 if문 못써서 if대용
        modal == true ? (
          <Modal 글제목변경={글제목변경} color={'yellow'} 글제목={글제목} />
        ) : null
      }
    </div>
  );
}

//component 문법 쓰면 좋은 상황
//1.반복적인 html축약할떄
//2. 큰 페이지들
//3. 자주변경되는 html ui
//첫글자 대문자
// state갖다 쓸때 불편함이 생길 수 있기때문에 조심

//props는 부모에서 자식한테만 전송가능
function Modal(props) {
  return (
    // 의미없는 div같은거 div 없애고 <></>로 써도됨
    // 태그여러개 병렬정렬한걸 하나로묶을떄
    <>
      <div className="modal" style={{ background: props.color }}>
        <h4>{props.글제목[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button
          onClick={() => {
            let copy = [...props.글제목];
            copy[0] = '여자 코트 추천';
            props.글제목변경(copy);
          }}
        >
          글수정
        </button>
      </div>
    </>
  );
}

export default App;

// 1. 자바스크립트는 array/object 자료를 하나 만들면

// 예를 들어서 let arr = [1,2,3] 이렇게 만들면

// [1,2,3] 자료는 램이라는 가상공간에 몰래 저장이 되고

// let arr 변수엔 그 자료가 어디있는지 가리키는 화살표만 담겨있습니다.

// 리액트에서 array/object state를 수정하고 싶으면

// 독립적인 카피본을 만들어서 수정하는게 좋습니다.

//동적인 UI작성하는 순서
//1.디자인완성
//2.UI의 현재 상태를 state로 저장
//3 state에 따라 UI가 어떻게 보일지 작성
