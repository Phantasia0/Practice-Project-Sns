import React, { useEffect } from 'react';
import useMetaData from 'hooks/useMetaData';

import LoginForm from 'containers/auth/LoginForm';
import AuthTemplate from '../components/auth/AuthTemplate';

import Page from './Page';

const LoginPage = () => {
  const [meta, changeMeta] = useMetaData({ title: 'LoginPage' });

  return (
    <Page {...meta}>
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </Page>
  );
};

export default LoginPage;
