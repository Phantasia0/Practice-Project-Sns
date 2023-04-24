/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MiniLoginForm from 'components/mini/MiniLoginForm';
import MiniProfileForm from 'components/mini/MiniProfileForm';

const AppLayout = ({ children }) => {
  const [show, setShow] = useState(true);

  return (
    <ContainerWrapper style={{ width: '100%' }}>
      <RowWrapper
        className="justify-content-md-space-between"
        style={{ width: '100%' }}
      >
        <Col xs={8} md={2}>
          {show ? <MiniProfileForm /> : <MiniLoginForm />}
        </Col>
        <Col xs={8} md={8}>
          {children}
        </Col>
        <Col xs={8} md={2}>
          Extra Contents in ThirdGrid
        </Col>
      </RowWrapper>
    </ContainerWrapper>
  );
};

export default AppLayout;

const ContainerWrapper = styled(Container)`
  min-width: 100%;
  margin: 0px;
  padding: 0px;
`;

const RowWrapper = styled(Row)`
  margin: 0px;
  padding: 0px;
`;
