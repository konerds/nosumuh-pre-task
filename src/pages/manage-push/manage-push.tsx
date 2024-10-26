import { Helmet } from 'react-helmet-async';

import Breadcrumb from '@components/shared/Breadcrumb';

const titlePage = 'PUSH 사용자';

const PageManagePush = () => {
  return (
    <>
      <Helmet>
        <title>{titlePage}</title>
      </Helmet>
      <div>
        <Breadcrumb title={titlePage} entries={[titlePage]} />
      </div>
    </>
  );
};

export default PageManagePush;
