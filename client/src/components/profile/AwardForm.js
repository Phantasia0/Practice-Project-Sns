import React, { useState, useEffect } from 'react';

import FormEdit from 'components/common/FormEdit';

const AwardHistoryForm = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle('수상이력');
  }, []);

  return (
    <FormEdit title={title}>
      <div>AwardHistoryForm</div>
    </FormEdit>
  );
};

export default AwardHistoryForm;
