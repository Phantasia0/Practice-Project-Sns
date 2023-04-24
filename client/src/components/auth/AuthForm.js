/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';

import styled from 'styled-components';
import palette from 'lib/styles/palette';

const AuthForm = ({ type, onSubmit, mini }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이메일 주소</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          isInvalid={false}
        />
        {/* <Form.Control.Feedback type="invalid">
          Please choose a username.
        </Form.Control.Feedback> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      {!mini && type === 'register' && (
        <>
          <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
            <Form.Label>비밀번호 재확인</Form.Label>
            <Form.Control type="password" placeholder="Password Confirm" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
        </>
      )}

      {!mini && type === 'login' && (
        <ButtonBox>
          <Button variant="primary" type="submit">
            로그인
          </Button>
          <Button variant="secondary" type="reset">
            <Link to="/register" className="register-link">
              회원가입 하기
            </Link>
          </Button>
        </ButtonBox>
      )}

      {!mini && type === 'register' && (
        <ButtonBox>
          <Button variant="primary" type="submit">
            회원가입
          </Button>
        </ButtonBox>
      )}

      {mini && (
        <div>
          <ButtonBox>
            <Button variant="primary" type="submit">
              로그인
            </Button>
          </ButtonBox>
        </div>
      )}
    </Form>
  );
};

export default AuthForm;

const ButtonBox = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  .register-link {
    color: ${palette.gray[1]};
    text-decoration: none;
  }
`;
