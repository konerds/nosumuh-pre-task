import { FC, useCallback, useState } from 'react';

import { CtxFilter } from '@stores/context-filter';

export const ProviderCtxFilter: FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [createdAt, _setCreatedAt] = useState('');
  const [type, _setType] = useState('ID');
  const [keyword, _setKeyword] = useState('');
  const setCreatedAt = useCallback(
    (createdAt: string) => _setCreatedAt(createdAt),
    [],
  );
  const setType = useCallback((type: string) => _setType(type), []);
  const setKeyword = useCallback((keyword: string) => _setKeyword(keyword), []);
  return (
    <CtxFilter.Provider
      value={{
        createdAt,
        type,
        keyword,
        setCreatedAt,
        setType,
        setKeyword,
      }}
    >
      {children}
    </CtxFilter.Provider>
  );
};
