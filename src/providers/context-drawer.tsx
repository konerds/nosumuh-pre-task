import { FC, useCallback, useState } from 'react';

import { CtxDrawer } from '@stores/context-drawer';

export const ProviderCtxDrawer: FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isOpened, setIsOpened] = useState(true);
  return (
    <CtxDrawer.Provider
      value={{
        isOpened,
        toggle: useCallback(() => setIsOpened((p) => !p), []),
      }}
    >
      {children}
    </CtxDrawer.Provider>
  );
};
