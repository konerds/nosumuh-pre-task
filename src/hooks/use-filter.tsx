import { useContext } from 'react';

import { CtxFilter } from '@stores/context-filter';

export const useFilter = () => useContext(CtxFilter);
