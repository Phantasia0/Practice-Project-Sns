import React, { useEffect } from 'react';
import useMetaData from 'hooks/useMetaData';

import Page from './Page';

const NetworkPage = () => {
  const [meta, changeMeta] = useMetaData({ title: 'NetworkPage' });

  return (
    <Page {...meta}>
      <div>NetworkPage</div>
    </Page>
  );
};

export default NetworkPage;
