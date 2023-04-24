/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import { Link } from 'react-router-dom';

const AuthTemplateLayout = styled.div`
  position: absolute;
  left: 0;
  top: 55px;
  bottom: 0;
  right: 0;
  background: ${palette.gray[4]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteLayout = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;

    .logo-link {
      color: ${palette.blue[6]};
      text-decoration: none;
      font-size: 1.5rem;
    }
  }

  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateLayout>
      <WhiteLayout>
        <div className="logo-area">
          <Link to="/" className="logo-link">
            포트폴리오
          </Link>
        </div>
        {children}
      </WhiteLayout>
    </AuthTemplateLayout>
  );
};

export default AuthTemplate;
