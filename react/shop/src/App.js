import logo from './logo.svg';
import './App.css';
import { useState, useReducer, useRef, useEffect, createContext } from 'react';
import data from './data';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './components/detail';
import { getValue } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React from 'react';
import Cart from './components/cart';
export let Context1 = React.createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let display = useRef();
  let [warn, setWarn] = useState(false);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <nav>
        <h3>SHOP</h3>
        <Link to={'/'}>HOME</Link>

        <a
          onClick={() => {
            navigate(-1);
          }}
        >
          뒤로가기
        </a>
        <Link to={'/event'}>Event</Link>
        <Link to={'/cart'}>장바구니</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Main setShoes={setShoes} shoes={shoes}></Main>}
        ></Route>
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes}></Detail>
            </Context1.Provider>
          }
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/event"
          element={
            <div className="event">
              <h3>오늘의 이벤트</h3>

              <ul>
                <li
                  ref={display}
                  onClick={() => {
                    navigate('/event/0');
                  }}
                >
                  이벤트1
                </li>
                <li
                  ref={display}
                  onClick={() => {
                    navigate('/event/1');
                  }}
                >
                  이벤트2
                </li>
                <li>
                  <input
                    onChange={(e) => {
                      if (isNaN(e.target.value)) {
                        setWarn(true);
                      } else {
                        setWarn(false);
                      }
                    }}
                    placeholder="숫자만 입력하세요"
                  ></input>
                </li>
                {warn && <p style={{ color: 'blue' }}>숫자만 입력하라고!</p>}
                <Outlet></Outlet>
              </ul>
            </div>
          }
        >
          <Route path="0" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="1" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path="*" element={<div>404 : 없는 페이지입니다.</div>}></Route>
      </Routes>
    </div>
  );
}

function Main({ shoes, setShoes }) {
  return (
    <main>
      <div className="main-img"></div>

      <div className="products-area">
        {shoes.length > shoes.length - 1
          ? shoes.map((a, i) => {
              return <Card key={i} a={a} i={i}></Card>;
            })
          : null}
      </div>
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => {
            let copy = [...shoes];
            copy.sort((a, b) => {
              if (a.title < b.title) {
                return -1;
              } else if (a.title > b.title) {
                return 1;
              } else {
                return 0;
              }
            });
            setShoes(copy);
          }}
        >
          가나다순정렬
        </button>
        <button
          onClick={() => {
            fetch(`https://codingapple1.github.io/shop/data2.json`)
              .then((result) => {
                return result.json();
              })
              .then((a) => {
                let copy = [];
                copy = [...shoes, ...a];

                setShoes(copy);
              })
              .catch((error) => {
                console.log('에러');
              });
          }}
        >
          상품 더보기
        </button>
      </div>
    </main>
  );
}

function Card({ a, i }) {
  let navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/detail/${a.id}`);
      }}
    >
      <img
        width={'100%'}
        src={`https://codingapple1.github.io/shop/shoes${a.id + 1}.jpg`}
      ></img>
      <h2>{a.title}</h2>
      <p>{a.content}</p>
      <p>가격 : {a.price}</p>
    </div>
  );
}
export default App;
