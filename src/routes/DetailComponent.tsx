import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
    bg?: string; // Define bg property as optional
}


const YellowBtn = styled.button<ButtonProps>`
    background: ${props => props.bg};
    color: black;
    padding: 10px;
`

let Box = styled.div`
    background: grey;
    padding: 20px;
`

const DetailComponent = (props: any) => {
    let [count, setCount] = useState(0);
    const [show, setShow] = useState(true);
    const [text, setText] = useState<any>();
    const {id} = useParams();
    const index = Number(id)
    const test = props.shoes.find((ele: {
        id: number;
    }) => ele.id === index)

    useEffect(() => {
        console.log(2)

        setTimeout(() => {
            setShow(false);
        }, 1000)

        return () => {
            console.log(1)
        }
    }, []);

    useEffect(() => {


        if (Number.isNaN(text)) {
            alert('그러지마세요');
        }
    }, [text]);

    // @ts-ignore
    return (
        <div className="container">
            {show &&
                <div className={"alert alert-warning"}>
                    2초이내 구매시 할인
                </div>
            }
            {count}
            <button onClick={() => {
                setCount(count + 1)
            }}>버튼
            </button>
            <div className={"row"}>
                <div className={"col-md-6"}>
                    <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="100%"/>
                </div>
                <div className={"col-md-6"}>
                    <input onChange={(e) => setText(e.target.value)}></input>
                    <h4 className={"pt-5"}>{test.title}</h4>
                    <p>{test.content}</p>
                    <p>{test.price}</p>
                    <Box>
                        <YellowBtn bg="blue">주문하기</YellowBtn>
                        <YellowBtn bg="orange">주문하기</YellowBtn>
                    </Box>
                </div>
            </div>

        </div>
    )
}

export default DetailComponent;

