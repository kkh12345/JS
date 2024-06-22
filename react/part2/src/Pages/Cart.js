import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setCount, deleteItem } from '../store';
import { useState, memo, useMemo } from 'react';

let Child = memo(function (props) {
  console.log('리렌더링');
  return <div>자식임</div>;
});

function CartPage() {
  let a = useSelector((state) => state.user);
  let cartItem = useSelector((state) => state.cartItem);
  let dispatch = useDispatch();

  let [count, setCount] = useState(0);

  let result = useMemo(() => {
    console.log(0);
    for (let i = 0; (i = 10); i++) {
      return i;
    }
  }, []);

  return (
    <div>
      {/* <div>
        {a.name}의 장바구니 나이 : {a.age}
      </div>
      <button
        onClick={() => {
          dispatch(changeAge(100));
        }}
      >
        나이
      </button> */}
      <Child count={count}></Child>
      <button
        onClick={() => {
          setCount(count++);
        }}
      >
        +
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th colSpan={2}>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cartItem.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(setCount(a.id));
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(deleteItem(a.id));
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default CartPage;
