import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

let Discount = styled.div`
  padding: 20px;
  background-color: beige;
`;

//다른 js파일에선 못씀

function DetailPage(props) {
  let [display, setDisplay] = useState(true);
  let { id } = useParams();
  let find = props.shoes.find((a) => {
    return a.id == id;
  });

  useEffect(() => {
    //html렌더링 후 동작
    let a = setTimeout(() => {
      setDisplay(false);
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  }, []);
  return (
    <div className="container">
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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
