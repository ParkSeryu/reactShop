import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import bg from './img/bg.png';
import data from './data'
import ShoesComponent from "./ShoesComponent";
import {Routes, Route, Link} from 'react-router-dom';
import DetailComponent from "./DetailComponent";


function App() {
    let [shoes] = useState(data);
    return (
        <div className="App">

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/">홈ㅁㄴㅇㄹ </Link>
                        <Link to="/detail"> 상세페이지</Link>
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
                </>}/>
                <Route path="/detail" element={<DetailComponent/>}/>
            </Routes>

        </div>
    );
}

export default App;
