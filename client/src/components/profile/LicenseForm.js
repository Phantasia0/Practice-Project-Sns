import React, { useState, useEffect } from 'react';

import FormEdit from 'components/common/FormEdit';

const LicenseForm = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle('자격증');
  }, []);

  return (
    <FormEdit title={title}>
      <div>LicenseForm</div>
    </FormEdit>
  );
};

export default LicenseForm;
