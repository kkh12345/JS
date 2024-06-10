/*eslint-disable*/
//동적인 ui 만드는 step
//1.디자인 2.현재상태를 state로 저장 3.state에 따라서 ui가 어떻게 보일지 조건문 등으로 작성

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [like, changeLike] = useState([0, 0, 0]);
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬독학',
  ]);
  let posts = '강남 우동 맛집';
  let [modal, setModal] = useState(false);
  let [color, changeColor] = useState({ background: 'skyBlue' });
  let [modalTitle, setModalTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
        }}
      >
        버튼
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort((a, b) => {
            if (a > b) {
              return 1;
            } else if (a < b) {
              return -1;
            } else {
              return 0;
            }
          });

          글제목변경(copy);
        }}
      >
        가나다순정렬
      </button>

      {글제목.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                if (modal == false) {
                  setModal(true);
                } else {
                  setModal(false);
                }
                setModalTitle(i);
              }}
            >
              {a}
              <span
                onClick={(e) => {
                  let copy = [...like];
                  copy[i]++;
                  changeLike(copy);
                  e.stopPropagation();
                }}
              >
                👍
              </span>
              {like[i]}
            </h4>
            <button
              className="delete"
              onClick={(e) => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      {modal == true ? (
        <Modal
          modalTitle={modalTitle}
          color={color}
          글제목변경={글제목변경}
          글제목={글제목}
        ></Modal>
      ) : null}

      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      ></input>
      <button
        className="add-btn"
        onClick={() => {
          let copy = [...글제목];

          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        추가
      </button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={props.color}>
      <h4>{props.글제목[props.modalTitle]}</h4>
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
  );
}
export default App;
