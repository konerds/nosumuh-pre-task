import { createContext } from 'react';
import { ICtxDrawer } from '@/interfaces';

export const CtxDrawer = createContext<ICtxDrawer>({
  isOpened: false,
  toggle: () => {},
});
