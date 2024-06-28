import styled from 'styled-components';
import cart from './cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, deleteProducts } from '../store';

function Cart() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((a, i) => {
          return (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.title}</td>
              <td>{a.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(a));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteProducts(a));
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Cart;
