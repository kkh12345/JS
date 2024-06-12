import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
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

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="main-bg"
        style={{ backgroundImage: 'url(' + bg + ')' }}
      ></div>

      <Container className="text-center">
        <Row>
          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} i={i} key={i}></Card>;
          })}

          {/* <Col md={4}>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              alt="img"
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col md={4}>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              alt="img"
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col md={4}>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              alt="img"
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col> */}
        </Row>
      </Container>
    </div>
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
