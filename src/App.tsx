import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/routes';
import { ProviderCtxDrawer } from '@providers/context-drawer';
import { ProviderCtxVendor } from '@providers/context-vendor';
import { ProviderCtxFilter } from './providers/context-filter';

const App = () => (
  <HelmetProvider>
    <ProviderCtxVendor>
      <ProviderCtxDrawer>
        <ProviderCtxFilter>
          <RouterProvider router={router} />
        </ProviderCtxFilter>
      </ProviderCtxDrawer>
    </ProviderCtxVendor>
  </HelmetProvider>
);
export default App;
