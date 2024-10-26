import { FC, useState } from 'react';

import { CtxVendor } from '@stores/context-vendor';

export const ProviderCtxVendor: FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [name] = useState('휴머스온');
  return (
    <CtxVendor.Provider
      value={{
        name,
      }}
    >
      {children}
    </CtxVendor.Provider>
  );
};
