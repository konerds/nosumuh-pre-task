import { useContext } from 'react';

import { CtxVendor } from '@stores/context-vendor';

export const useVendor = () => useContext(CtxVendor);
