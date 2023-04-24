import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import profileImage from '../../assets/cat1.jpg';

const MiniProfileForm = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate('/profile');
  }, [navigate]);

  return (
    <Card>
      <Card.Img variant="top" src={profileImage} />
      <Card.Body>
        <Card.Title>Tester User</Card.Title>
        <Card.Text>ncprog@elicer.com</Card.Text>
        <Card.Text>
          설명이 아직 없습니다.
          <br />
          추가해주세요
        </Card.Text>
        <div className="text-center">
          <Button variant="primary" className="center" onClick={onClick}>
            Edit
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MiniProfileForm;
