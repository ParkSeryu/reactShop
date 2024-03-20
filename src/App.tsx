import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import bg from './img/bg.png';
import shoes1 from './img/shoes1.jpg';
import 서버 from './data'
import ShoesComponent from "./ShoesComponent";


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
                    {shoes.map((ele, index) => {
                        return <ShoesComponent key={index} id={ele.id} title={ele.title} content={ele.content}
                                               price={ele.price}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
