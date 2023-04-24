import React, { useState, useEffect } from 'react';

import FormEdit from 'components/common/FormEdit';

const WorkForm = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle('프로젝트');
  }, []);

  return (
    <FormEdit title={title}>
      <div>WorkForm</div>
    </FormEdit>
  );
};

export default WorkForm;
