import React from "react";
import {useParams} from "react-router-dom";

const DetailComponent = (props: any) => {
    const {id} = useParams();
    const index = Number(id)
    const test = props.shoes.find((ele: {
        id: number;
    }) => ele.id === index)
    console.log(test)


    // @ts-ignore
    return (
        <div className="container">
            <div className={"row"}>
                <div className={"col-md-6"}>
                    <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="100%"/>
                </div>
                <div className={"col-md-6"}>

                    <h4 className={"pt-5"}>{test.title}</h4>
                    <p>{test.content}</p>
                    <p>{test.price}</p>


                    <button className={"btn btn-danger"}>주문하기</button>
                </div>
            </div>

        </div>
    )
}

export default DetailComponent;

