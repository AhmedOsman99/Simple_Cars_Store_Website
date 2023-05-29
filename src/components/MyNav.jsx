import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function MyNav(props) {
let {myFun} = props

  let [data, setData] = useState('')
  let getText = (event) => {
    setData(data = event.target.value)
  }
  myFun(data)
  // console.log(data)
  return (
    <div>
      <Navbar bg="dark" expand="lg" className="text-light navbar-dark">
        <Container fluid>
          <Navbar.Brand href="#">Rush</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-link" to="/home">Home</NavLink>
              <NavLink className="nav-link" to="/products">Products</NavLink>
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={getText}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
