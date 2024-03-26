import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {Nav} from 'react-bootstrap';

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
    const [show, setShow] = useState(true);
    const [text, setText] = useState<any>();
    const [탭, 탭변경] = useState(1);
    const {id} = useParams();
    const index = Number(id)
    const findData = props.shoes.find((ele: {
        id: number;
    }) => ele.id === index)

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 1000)
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
            <div className={"row"}>
                <div className={"col-md-6"}>
                    <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="100%"/>
                </div>
                <div className={"col-md-6"}>
                    <input onChange={(e) => setText(e.target.value)}></input>
                    <h4 className={"pt-5"}>{findData.title}</h4>
                    <p>{findData.content}</p>
                    <p>{findData.price}</p>
                    <Box>
                        <YellowBtn bg="blue">주문하기</YellowBtn>
                        <YellowBtn bg="orange">주문하기</YellowBtn>
                    </Box>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => {
                        탭변경(0)
                    }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {
                        탭변경(1)
                    }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {
                        탭변경(2)
                    }
                    }
                              eventKey="link2">버튼2</Nav.Link>

                </Nav.Item>
            </Nav>
            <TabContent 탭={탭}/>
            {/*{
                탭 === 0 ? <div>내용0</div> : 탭 === 1 ? <div>내용1</div> : <div>내용2</div>
            }*/}
        </div>
    )
}

const TabContent = ({탭}: any) => {
    if (탭 === 0) {
        return <div>내용0</div>
    } else if (탭 === 1) {
        return <div>내용1</div>
    } else if (탭 === 2) {
        return <div>내용2</div>
    }

    return null;
}


export default DetailComponent;

