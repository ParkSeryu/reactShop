import React, {createContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import bg from './img/bg.png';
import data from './data'
import ShoesComponent from "./routes/ShoesComponent";
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import DetailComponent from "./routes/DetailComponent";
import axios from 'axios';
import Cart from './routes/Cart';

interface ContextValue {
    재고: number[];
    shoes: { id: number; title: string; content: string; price: number; }[];
}

export let Context1 = createContext<ContextValue>({재고: [], shoes: []});

function App() {
    let [shoes, setShoes] = useState(data);
    let [count, setCount] = useState(2);
    let [재고] = useState([10, 11, 12])

    let navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => {
                            navigate('/')
                        }}>Home </Nav.Link>
                        <Nav.Link onClick={() => {
                            navigate('/detail')
                        }}>Detail</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


            <Routes>
                <Route path={"/"} element={<>
                    <div className={"main-bg"} style={{backgroundImage: 'url(' + bg + ')'}}></div>

                    <div className="container">
                        <div className="row">
                            {shoes.map((ele, index) => {
                                return <ShoesComponent key={index} id={ele.id} title={ele.title} content={ele.content}
                                                       price={ele.price}/>
                            })}
                        </div>
                    </div>
                    <button onClick={() => {
                        setCount(count + 1);
                        axios.get(`https://codingapple1.github.io/shop/data${count}.json`).then((data) => {
                            setShoes([...shoes, ...data.data]);
                        }).catch((error) => {
                                alert('상품이 업성요')
                            }
                        )
                    }}>버튼
                    </button>
                </>}/>
                <Route path="/detail/:id" element={
                    <Context1.Provider value={{재고, shoes}}>
                        <DetailComponent shoes={shoes}/>
                    </Context1.Provider>
                }/>

                <Route path={"/about"} element={<About/>}>
                    <Route path={"member"} element={<div>멤버임</div>}/>
                    <Route path={"location"} element={<div>위치정보임</div>}/>
                </Route>


                <Route path="/event" element={<Event/>}>
                    <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
                    <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
                </Route>

                <Route path={"/cart"} element={<Cart/>}/>


                <Route path="*" element={<div>없는 페이지에요</div>}/>
            </Routes>

        </div>
    );
}

function About() {
    return (
        <div>
            <h4>회사정보임</h4>
            <Outlet></Outlet>
        </div>
    )
}

const Event = () => {
    return (
        <div>
            오늘의 이벤트
            <Outlet/>
        </div>
    )
}

export default App;
