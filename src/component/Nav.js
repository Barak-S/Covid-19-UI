import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form } from 'react-bootstrap';

export default function Navigator(){
    return(
        <div>
            <Navbar collapseOnSelect bg="dark" expand="xl" className="main-navigation">
            <Navbar.Brand href="/" style={{fontWeight: "700", color: "#ED5145"}}>Covid-19 Data UI</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-center" style={{ flex: 1}}>
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <Nav.Link href="#link" style={{color:"#ED5145", fontWeight: "700", fontSize: 15, marginLeft:25}}>ABOUT</Nav.Link>   
                    </Link>
                    <Nav.Link onClick={()=> window.open("https://github.com/Barak-S/Covid-19-UI", "_blank")} style={{color:"#ED5145", fontWeight: "700", fontSize: 15, marginLeft:25}}>GITHUB</Nav.Link>   
                    <Nav.Link onClick={()=> window.open("https://www.linkedin.com/in/baraksaidoff/", "_blank")} style={{color:"#ED5145", fontWeight: "700", fontSize: 15, marginLeft:25}}>LINKEDIN</Nav.Link>   
                </Nav>
                <div style={{marginRight: "13.5%"}}>
                <Form inline>
                </Form>
                </div>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}