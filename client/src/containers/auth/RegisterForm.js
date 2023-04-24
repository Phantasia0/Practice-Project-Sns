import React from 'react';
import { useNavigate } from 'react-router-dom';

import AuthForm from 'components/auth/AuthForm';

const RegisterForm = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // 회원가입 에러 처리
    navigate('/login');
  };

  return <AuthForm type="register" onSubmit={onSubmit} mini={false} />;
};

export default RegisterForm;
