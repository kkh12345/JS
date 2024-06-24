import { useParams } from 'react-router-dom';

function Detail({ shoes }) {
  let { id } = useParams();
  console.log(shoes);
  return (
    <div className="detail">
      <img
        src={`https://codingapple1.github.io/shop/shoes${shoes[id].id + 1}.jpg`}
        width={'100%'}
      ></img>
      <div className="detail-content">
        <h2>{shoes[id].title}</h2>
        <p>{shoes[id].content}</p>
        <p>가격 : {shoes[id].price} </p>
        <button className="cart-btn">장바구니에 넣기</button>
      </div>
    </div>
  );
}

export default Detail;
