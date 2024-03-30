import {ReactElement, JSXElementConstructor, ReactNode, ReactPortal} from "react";
import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";

type stocks = {
    id: number,
    name: string,
    count: number
}
const Cart = () => {

    const stock = useSelector((state: any) => state.stock);


    return (
        <div>
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
                {stock.map((ele: stocks) => (
                    <tr key={ele.id}>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.count}</td>
                        <td>안녕</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Cart