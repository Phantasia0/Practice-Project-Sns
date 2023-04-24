import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import {
  Form,
  InputGroup,
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';

const EducationEdit = () => {
  const navigate = useNavigate();

  const onSubmitForm = useCallback(() => {
    navigate('/profile');
  }, [navigate]);

  return (
    <Form
      onSubmit={onSubmitForm}
      className="mx-auto mt-5"
      style={{ maxWidth: '80%' }}
    >
      <Form.Group controlId="school" className="mb-3">
        <Form.Label>학교</Form.Label>
        <Form.Control type="text" placeholder="학교 이름" />
      </Form.Group>

      <Form.Group controlId="major" className="mb-3">
        <Form.Control as="select">
          <option>전공</option>
          <option value="기계공학과">기계공학과</option>
          <option value="산업공학과">산업공학과</option>
          <option value="우주공학과">우주공학과</option>
          <option value="생명공학과">생명공학과</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="status" className="d-flex">
        <Form.Label className="me-3">상태</Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="재학중"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="학사졸업"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="석사졸업"
              name="group1"
              type={type}
              id={`inline-${type}-3`}
            />
            <Form.Check
              inline
              label="박사졸업"
              name="group1"
              type={type}
              id={`inline-${type}-4`}
            />
          </div>
        ))}
      </Form.Group>

      <ButtonWrapper>
        <Button variant="primary" type="submit">
          제출
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default EducationEdit;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
