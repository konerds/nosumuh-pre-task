import { useContext } from 'react';

import { CtxDrawer } from '@stores/context-drawer';

export const useDrawer = () => useContext(CtxDrawer);
