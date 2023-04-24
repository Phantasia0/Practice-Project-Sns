import React, { useState, useEffect } from 'react';

import FormEdit from 'components/common/FormEdit';

import EducationEdit from './education/EducationEdit';
import EducationList from './education/EducationList';

const EducationForm = () => {
  const [title, setTitle] = useState('');
  const [editShow, setEditShow] = useState(false);

  useEffect(() => {
    setTitle('학력');
  }, []);

  const onClick = () => {
    setEditShow(!editShow);
  };

  return (
    <FormEdit title={title} onClick={onClick}>
      {editShow ? <EducationEdit /> : <EducationList />}
    </FormEdit>
  );
};

export default EducationForm;
