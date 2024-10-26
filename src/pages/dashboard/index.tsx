import { Helmet } from 'react-helmet-async';

import Breadcrumb from '@components/shared/Breadcrumb';

const titlePage = '대시보드';

const PageDashboard = () => {
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

export default PageDashboard;
