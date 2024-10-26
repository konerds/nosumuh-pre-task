import { createContext } from 'react';

export const CtxDrawer = createContext({
  isOpened: false,
  toggle: () => {},
});
