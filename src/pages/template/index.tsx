import { Helmet } from 'react-helmet-async';

import Breadcrumb from '@components/shared/Breadcrumb';

const titlePage = '템플릿';

const PageTemplate = () => {
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

export default PageTemplate;
