import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/routes';
import { ProviderCtxDrawer } from '@providers/context-drawer';
import { ProviderCtxVendor } from '@providers/context-vendor';

const App = () => (
  <HelmetProvider>
    <ProviderCtxVendor>
      <ProviderCtxDrawer>
        <RouterProvider router={router} />
      </ProviderCtxDrawer>
    </ProviderCtxVendor>
  </HelmetProvider>
);
export default App;
