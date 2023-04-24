import React, { useEffect } from 'react';
import useMetaData from 'hooks/useMetaData';

import RegisterForm from 'containers/auth/RegisterForm';
import AuthTemplate from '../components/auth/AuthTemplate';

import Page from './Page';

const RegisterPage = () => {
  const [meta, changeMeta] = useMetaData({ title: 'RegisterPage' });

  return (
    <Page {...meta}>
      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
    </Page>
  );
};

export default RegisterPage;
