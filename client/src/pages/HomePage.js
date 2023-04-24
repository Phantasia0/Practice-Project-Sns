import React, { useEffect } from 'react';
import useMetaData from 'hooks/useMetaData';

import AppLayout from 'components/common/AppLayout';
import Page from './Page';

const HomePage = () => {
  const [meta, changeMeta] = useMetaData({ title: 'HomePage' });

  return (
    <Page {...meta}>
      <AppLayout>
        <div>
          <div>HomePage</div>
          <div>HomePage in ExtraContents</div>
        </div>
      </AppLayout>
    </Page>
  );
};

export default HomePage;
