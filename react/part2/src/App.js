import logo from './logo.svg';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import React from 'react';
import bg from './bg.png';
import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
} from 'react-bootstrap';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import DetailPage from './Pages/Detail';
import axios from 'axios';
import { CartPage } from './Pages/Cart';
import styled from 'styled-components';
import { useQuery } from 'react-query';

let Context1 = React.createContext();
export { Context1 };

function App() {
  let [context] = useState([10, 11, 12]);
  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);

  let result = useQuery(
    ['작명'],
    () => {
      return axios
        .get('https://codingapple1.github.io/userdata.json')
        .then((a) => {
          console.log('요청됨');
          return a.data;
        });
    },
    { staleTime: 1000 }
  );

  useEffect(() => {
    if (localStorage.getItem('watched') == null) {
      localStorage.setItem('watched', JSON.stringify([]));
    }
  }, []);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <a
              className="home"
              onClick={() => {
                navigate('/');
              }}
            >
              홈
            </a>

            <Link to="/event" className="event">
              Event
            </Link>
            <a
              className="cart"
              onClick={() => {
                navigate('/cart');
              }}
            >
              Cart
            </a>
            <Link
              onClick={() => {
                navigate(-1);
              }}
              className="behind"
            >
              뒤로가기
            </Link>
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading && '로딩중'}
            {result.error && '로딩중'}
            {result.data && result.data.name}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={<MainPage setShoes={setShoes} shoes={shoes}></MainPage>}
        ></Route>
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ context }}>
              <DetailPage shoes={shoes}></DetailPage>
            </Context1.Provider>
          }
        ></Route>
        <Route path="/event" element={<EventPage></EventPage>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path="*" element={<p>404 : 없는페이지에요</p>}></Route>
        <Route path="cart" element={<CartPage></CartPage>}></Route>
      </Routes>
    </div>
  );
}
function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function MainPage(props) {
  let [inputValue, setInputValue] = useState(0);
  let [count, setCount] = useState(0);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(count);
    count == 1
      ? axios
          .get('https://codingapple1.github.io/shop/data2.json')
          .then((result) => {
            let copy = [...props.shoes, ...result.data];
            props.setShoes(copy);
          })
          .catch(() => {
            console.log('실패함');
          })
      : count == 2
      ? axios
          .get('https://codingapple1.github.io/shop/data3.json')
          .then((result) => {
            let copy = [...props.shoes, ...result.data];
            props.setShoes(copy);
          })
          .catch(() => {
            console.log('실패함');
          })
      : console.log(props.shoes);
    setLoading(false);
  }, [count]);

  // let [number, setNumber] = useState(false);
  // useEffect(() => {
  //   /^[0-9]*$/.test(inputValue) == true ? setNumber(true) : setNumber(false);
  // }, [inputValue]);

  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: 'url(' + bg + ')' }}
      ></div>

      <Container className="text-center">
        <Row>
          {props.shoes.map((a, i) => {
            return <Card shoes={a} i={i} key={i}></Card>;
          })}
        </Row>
      </Container>
      {count <= 2 && loading == true ? (
        <div style={{ background: 'green', padding: '20px' }}>로딩중...</div>
      ) : null}
      {count > 2 ? (
        <div style={{ padding: '20px' }}>상품이 더이상 존재하지 않습니다.</div>
      ) : null}
      <div className="button-area">
        <button
          onClick={() => {
            let copy = [...props.shoes];
            copy.sort((a, b) => {
              if (a.title == b.title) {
                return 0;
              } else if (a.title < b.title) {
                return -1;
              } else {
                return 1;
              }
            });
            props.setShoes(copy);
          }}
        >
          가나다순정렬
        </button>
        <button
          onClick={() => {
            setLoading(true);
            setCount(count + 1);

            //axios
            //Promise.all([axios.get('url1'),axios.get('url2')])
            //.then 요청 두개다성공했을때 실행
            //ajax요청 여러번 하고 싶을때
          }}
        >
          상품 더보기
        </button>
        <input
          className="number"
          onInput={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="숫자입력"
        ></input>

        {isNaN(inputValue) ? (
          <div style={{ color: 'red' }}>그러지마셈</div>
        ) : null}
      </div>

      <Watched shoes={props.shoes}></Watched>
    </>
  );
}

function Card(props) {
  return (
    <Col md={4}>
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        alt="img"
        width="80%"
      ></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}원</p>
    </Col>
  );
}

let Reset = styled.button`
  display: inline-block;
  border: none;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: lightpink;
  padding: 5px 10px;
`;

function Watched({ shoes }) {
  let [item, setItem] = useState(JSON.parse(localStorage.getItem('watched')));

  return (
    <div className="watched-bg">
      <div className="watched-nav">최근 본 상품</div>
      <div className="watched-main">
        <div className="watched-item">
          {item.map((a, i) => {
            return (
              <div key={i}>
                <img
                  src={`https://codingapple1.github.io/shop/shoes${
                    a.id + 1
                  }.jpg`}
                  width={'200px'}
                ></img>
                <p>{a.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Reset
        onClick={() => {
          setItem([]);
          localStorage.setItem('watched', JSON.stringify([]));
        }}
      >
        초기화
      </Reset>
      {/* <div className="watched-footer">TOP▲</div> */}
    </div>
  );
}
export default App;
