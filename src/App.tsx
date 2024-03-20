import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import bg from './img/bg.png';
import shoes1 from './img/shoes1.jpg';
import 서버 from './data'

function App() {
    let [shoes] = useState(서버);
    return (
        <div className="App">

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
            <div className={"main-bg"} style={{backgroundImage: 'url(' + bg + ')'}}></div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={shoes1} width={"80%"}></img>
                        <h4>{shoes[0].title}</h4>
                        <p>{shoes[0].content}</p>
                    </div>
                    <div className="col-md-4"><img src={"https://codingapple1.github.io/shop/shoes2.jpg"}
                                                   width={"80%"}></img>
                        <h4>{shoes[1].title}</h4>
                        <p>{shoes[1].content}</p>
                    </div>
                    <div className="col-md-4">
                        <img src={"https://codingapple1.github.io/shop/shoes3.jpg"}
                             alt={"shoes3"}
                             width={"80%"}></img>
                        <h4>{shoes[2].title}</h4>
                        <p>{shoes[2].content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
