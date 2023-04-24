import React, { useEffect } from 'react';
import styled from 'styled-components';
import useMetaData from 'hooks/useMetaData';

import EducationForm from 'components/profile/EducationForm';
import AwardForm from 'components/profile/AwardForm';
import WorkForm from 'components/profile/WorkForm';
import LicenseForm from 'components/profile/LicenseForm';

import AppLayout from 'components/common/AppLayout';
import Page from './Page';

const Profile = () => {
  const [meta, changeMeta] = useMetaData({ title: 'ProfilePage' });

  return (
    <Page {...meta}>
      <AppLayout>
        <FormWrapper>
          <EducationForm />
          <AwardForm />
          <WorkForm />
          <EducationForm />
        </FormWrapper>
      </AppLayout>
    </Page>
  );
};

export default Profile;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
