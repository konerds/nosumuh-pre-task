import { Helmet } from 'react-helmet-async';

import Breadcrumb from '@components/shared/Breadcrumb';

const titlePage = '발송하기';

const PageMessageSend = () => {
  return (
    <>
      <Helmet>
        <title>{titlePage}</title>
      </Helmet>
      <div>
        <Breadcrumb title={titlePage} entries={['메시지', titlePage]} />
      </div>
    </>
  );
};

export default PageMessageSend;
