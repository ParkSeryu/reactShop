import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addStock} from "../store/StockSlice";
import {memo, useEffect, useState} from "react";

type states = {
    id: number,
    name: string,
    count: number
}

type Chiledrops =
    {
        count: number;
    }

const Child = memo(({count}: Chiledrops) => {
    console.log('render');
    return <div>자식임</div>
})

const Cart = () => {

    const state = useSelector((state: any) => state);
    let dispatch = useDispatch()
    let [count, setCount] = useState(0);

    useEffect(() => {
        console.log(state)
    }, [state]);

    return (
        <div>
            <Child count={count}></Child>
            <button onClick={() => setCount(count + 1)}>+</button>
            {state.user.name} 의 장바구니 {state.user.age}
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
                </thead>
                <tbody>
                {state.stock.map((ele: states) => (
                    <tr key={ele.id}>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.count}</td>
                        <td>
                            <button onClick={() => {
                                dispatch(addStock(ele.id));
                            }}>+
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Cart