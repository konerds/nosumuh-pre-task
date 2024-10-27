import { createContext } from 'react';
import { ICtxFilter } from '@/interfaces';

export const CtxFilter = createContext<ICtxFilter>({
  createdAt: '',
  type: '',
  keyword: '',
  setCreatedAt: () => {},
  setType: () => {},
  setKeyword: () => {},
});
