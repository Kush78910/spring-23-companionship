/*
// import React from 'react'

function usrClick() {
    // placeholdder
    alert('You have clicked a button :)');
}

export default function Navbar() {

}
*/

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

function NavBar() {
  return (
    <Navbar sticky="top" bg="light">
      <Container>

        <Navbar.Brand href="home">
            <img
            alt=""
            src="/placeholder_logo.png"
            width="80"
            height="30"
            className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>

        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
        </Form>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Log In
          </Navbar.Text>
        </Navbar.Collapse>
        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Sign In
          </Navbar.Text>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;