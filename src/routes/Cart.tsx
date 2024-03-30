import {ReactElement, JSXElementConstructor, ReactNode, ReactPortal} from "react";
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addStock} from "../store";

type stocks = {
    id: number,
    name: string,
    count: number
}
const Cart = () => {

    const stock = useSelector((state: any) => state);
    let dispatch = useDispatch()


    return (
        <div>
            {stock.user} 의 장바구니
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
                {stock.stock.map((ele: stocks) => (
                    <tr key={ele.id}>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.count}</td>
                        <td>
                            <button onClick={() => {
                                dispatch(addStock());
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