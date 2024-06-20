import { useContext, useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { Context1 } from '../App';
import { flushSync } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setCount } from '../store';

let Discount = styled.div`
  padding: 20px;
  background-color: beige;
`;

function DetailPage(props) {
  let context = useContext(Context1);
  let [display, setDisplay] = useState(true);
  let { id } = useParams();
  let find = props.shoes.find((a) => {
    return a.id == id;
  });
  let [tap, setTap] = useState(0);
  let [fade, setFade] = useState('');
  let dispatch = useDispatch();
  let cartItem = useSelector((state) => state.cartItem);

  useEffect(() => {
    //html렌더링 후 동작
    let get = localStorage.getItem('watched');
    get = JSON.parse(get);
    get.push(props.shoes[id].id);
    get = new Set(get);
    get = [...get];
    localStorage.setItem('watched', JSON.stringify(get));
    let b = setTimeout(() => {
      setFade('end');
    }, 100);
    let a = setTimeout(() => {
      setDisplay(false);
    }, 2000);

    return () => {
      setFade('');
    };
  }, []);
  return (
    <div className={`container start ${fade}`}>
      {display == true ? <Discount>2초이내 구매시 할인</Discount> : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${find.id + 1}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{find.title}</h4>
          <p>{find.content}</p>
          <p>{find.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              let add = {
                id: find.id,
                name: find.title,
                count: 1,
              };
              dispatch(addItem(add));
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTap(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTap(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTap(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TapContent shoes={props.shoes} tap={tap}></TapContent>
      {context.context[0]}
    </div>
  );
}

function TapContent({ tap, shoes }) {
  // if (tap == 0) {
  //   return <div>내용0</div>;
  // } else if (tap == 1) {
  //   return <div>내용1</div>;
  // } else if (tap == 2) {
  //   return <div>내용2</div>;
  // }
  let { context } = useContext(Context1);
  let [fade, setFade] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 10);

    return () => {
      setFade('');
    };
  }, [tap]);
  return (
    <div className={`start ${fade}`}>
      {
        [
          <div>{shoes[0].title}</div>,
          <div>{shoes[1].title}</div>,
          <div>{shoes[2].title}</div>,
        ][tap]
      }
      {context[1]}
    </div>
  );
}
export default DetailPage;
