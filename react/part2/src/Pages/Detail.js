import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let RedBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == 'blue' ? 'yellow' : 'white')};
  padding: 10px;
`;

let Box = styled.div`
  background: gray;
  padding: 20px;
`;
let NewBtn = styled(RedBtn)`
  background: orange;
`;
//다른 js파일에선 못씀

function DetailPage(props) {
  let { id } = useParams();
  let find = props.shoes.find((a) => {
    return a.id == id;
  });

  return (
    <div className="container">
      {/* <Box>
        <RedBtn bg="blue">버튼</RedBtn>
        <RedBtn bg="red">버튼</RedBtn>
        <NewBtn>버튼</NewBtn>
      </Box> */}

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
