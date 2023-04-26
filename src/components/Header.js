import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img style={{borderRadius:'10px'}}
              alt=""
              src="https://i.postimg.cc/FH3fjWBw/plantimg.gif"
              width="40"
              height="30"
              className="d-inline-block align-top bg-light "
            />{' '}
            <strong style={{fontSize:'unset',fontFamily:'cursive'}}>PLANTVINE</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header