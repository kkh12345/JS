// eslint-disable

import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬 독학',
  ]);
  let [count, setCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState('');
  let [입력값, 입력값변경] = useState('');
  let inputRef = useRef(null);
  return (
    <div className="App">
      <nav>
        <div className="nav-frame">ReactBlog</div>
      </nav>

      <main>
        <div className="edit">
          <input
            ref={inputRef}
            onChange={(e) => {
              입력값변경(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(입력값);
              let copy = [...글제목];
              let copyCount = [...count];
              copyCount.push(0);
              copy.push(입력값);
              setCount(copyCount);
              글제목변경(copy);
              inputRef.current.value = '';
            }}
          >
            글발행
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
          <button
            onClick={() => {
              let copy = [...글제목];
              copy[0] = '여자 코트 추천';
              글제목변경(copy);
            }}
          >
            글수정
          </button>
        </div>
        {글제목.map((a, i) => {
          return (
            <div className="article-flesh" key={i}>
              <div className="article-frame">
                <button
                  className="article-delete"
                  onClick={() => {
                    let copy = [...글제목];
                    copy.splice(i, 1);
                    글제목변경(copy);
                  }}
                >
                  삭제
                </button>
                <h4
                  onClick={() => {
                    setTitle(a);
                    setModal(!modal);
                  }}
                >
                  {a}
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      let copy = [...count];
                      copy[i] += 1;
                      setCount(copy);
                    }}
                  >
                    👍
                  </span>
                  {count[i]}
                </h4>
                <p>2월 17일 발행</p>
              </div>
            </div>
          );
        })}
      </main>
      {modal && (
        <Modal
          color="#ccc"
          글제목={글제목}
          글제목변경={글제목변경}
          title={title}
        ></Modal>
      )}
    </div>
  );
}

function Modal({ 글제목, 글제목변경, color, title }) {
  return (
    <div className="modal" style={{ background: color }}>
      <h4>{title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
