import { useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailPage(props) {
  let { id } = useParams();
  let find = props.shoes.find((a) => {
    return a.id == id;
  });

  return (
    <div className="container">
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
