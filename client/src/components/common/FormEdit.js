/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { PencilSquare } from 'react-bootstrap-icons';

const FormEdit = ({ title, children, onClick }) => {
  return (
    <Card>
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          <h5>{title}</h5>
          <a href="#">More</a>
        </div>
      </Card.Header>
      <Card.Body>
        {children}
        <div className="d-flex justify-content-end">
          <Button variant="primary" onClick={onClick}>
            <PencilSquare />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FormEdit;
