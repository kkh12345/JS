import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
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

function App() {
  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);
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
            <Link
              onClick={() => {
                navigate(-1);
              }}
              className="behind"
            >
              뒤로가기
            </Link>
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
          element={<DetailPage shoes={shoes}></DetailPage>}
        ></Route>
        <Route path="/event" element={<EventPage></EventPage>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path="*" element={<p>404 : 없는페이지에요</p>}></Route>
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

export default App;
