import React from 'react';
import { useNavigate } from 'react-router-dom';

import AuthForm from 'components/auth/AuthForm';

const LoginForm = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // 로그인 에러 처리
    navigate('/');
  };

  return <AuthForm type="login" onSubmit={onSubmit} mini={false} />;
};

export default LoginForm;
