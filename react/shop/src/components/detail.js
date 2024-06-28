import { hover } from '@testing-library/user-event/dist/hover';
import { useContext, useEffect, useState } from 'react';
import {
  Routes,
  Router,
  useParams,
  Route,
  useNavigate,
} from 'react-router-dom';
import styled from 'styled-components';
import { Context1 } from '../App';
import { useDispatch } from 'react-redux';
import { addProducts } from '../store';

const CartBtn = styled.button`
  padding: 5px 10px;
  background-color: ${(props) => props.bg};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.bg == 'darkred' ? 'red' : null)};
  }
`;
const YellowBox = styled.div`
  background-color: beige;
  padding: 20px;
  text-align: center;
`;

const Bg = styled.div`
  width: 600px;
  margin: 0 auto;
  margin-top: 30px;
`;
const Nav = styled.ul`
  padding: 0;
  margin: 0;
`;
const NavItem = styled.li`
  display: inline-block;
  padding: 10px;
  margin-right: 3px;
  cursor: pointer;
  background-color: #eee;

  &:hover {
    background-color: #ccc !important;
  }
`;
const Main = styled.div`
  background-color: #eee;
  padding: 30px;
`;

function Detail({ shoes }) {
  let [fade, setFade] = useState('');
  let { id } = useParams();
  let find = shoes.find((a) => {
    return a.id == id;
  });
  let [show, setShow] = useState(true);
  let [click, setClick] = useState(0);
  let { 재고 } = useContext(Context1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let a = setTimeout(() => {
      setShow(false);
    }, 2000);
    let b = setTimeout(() => {
      setFade('end');
    }, 200);

    return () => {
      setFade('');
      clearTimeout(a);
    };
  }, []);

  return (
    <div className={`start ${fade}`}>
      {show && <YellowBox>2초내 구매시 할인</YellowBox>}
      <div className="detail ">
        <img
          src={`https://codingapple1.github.io/shop/shoes${find.id + 1}.jpg`}
          width={'100%'}
        ></img>
        <div className="detail-content">
          <h2>{find.title}</h2>
          <p>{find.content}</p>
          <p>가격 : {find.price} </p>

          <CartBtn
            bg={'darkred'}
            onClick={() => {
              dispatch(addProducts(find));
            }}
          >
            장바구니에 넣기
          </CartBtn>
        </div>
      </div>
      <Tap click={click} setClick={setClick}></Tap>
    </div>
  );
}

function Tap({ click, setClick }) {
  let [fade, setFade] = useState('');
  useEffect(() => {
    let a = setTimeout(() => {
      setFade('end');
    }, 200);

    return () => {
      setFade('');
      clearTimeout(a);
    };
  }, [click]);
  return (
    <Bg>
      <Nav>
        {[0, 1, 2].map((a, i) => {
          return (
            <NavItem
              key={i}
              style={
                click == i
                  ? { backgroundColor: 'palegoldenrod' }
                  : { backgroundColor: '#eee' }
              }
              onClick={() => {
                setClick(i);
              }}
            >
              버튼{i + 1}
            </NavItem>
          );
        })}
      </Nav>
      <div className={`start ${fade}`}>
        {
          [
            <Main
              style={
                click == 0
                  ? { backgroundColor: 'palegoldenrod' }
                  : { backgroundColor: '#eee' }
              }
            >
              내용1
            </Main>,
            <Main
              style={
                click == 1
                  ? { backgroundColor: 'palegoldenrod' }
                  : { backgroundColor: '#eee' }
              }
            >
              내용2
            </Main>,
            <Main
              style={
                click == 2
                  ? { backgroundColor: 'palegoldenrod' }
                  : { backgroundColor: '#eee' }
              }
            >
              내용3
            </Main>,
          ][click]
        }
      </div>
    </Bg>
  );
}
export default Detail;
