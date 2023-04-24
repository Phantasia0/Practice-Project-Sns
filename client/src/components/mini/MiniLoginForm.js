/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import AuthForm from 'components/auth/AuthForm';

const MiniLoginForm = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <AuthForm type="login" mini={true} onSubmit={onSubmit}>
      123
    </AuthForm>
  );
};

export default MiniLoginForm;
