import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const onClick = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">포트폴리오</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/profile">나의 페이지</Nav.Link>
          <Nav.Link href="/network">네트워크</Nav.Link>
        </Nav>
        {isLoggedIn ? (
          <Nav className="auto justify-content-end">
            <Nav.Link href="/register">회원가입</Nav.Link>
            <Nav.Link href="/login" onClick={onClick}>
              로그인
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="auto justify-content-end">
            <Nav.Link href="/" onClick={onClick}>
              로그아웃
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
