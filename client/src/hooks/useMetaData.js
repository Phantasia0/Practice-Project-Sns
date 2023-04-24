import { useState, useCallback } from 'react';

export default (initValue = null) => {
  const [meta, setMeta] = useState(initValue);

  const handler = useCallback(
    (props) => {
      if (!meta) return;
      setMeta({ ...meta, ...props });
    },
    [meta],
  );

  return [meta, handler];
};
