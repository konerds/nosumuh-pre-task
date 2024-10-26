import { Helmet } from 'react-helmet-async';

import LayoutBoard from '@components/layout/LayoutBoard';

const titlePage = '공지사항';

const PageBoardNotice = () => {
  return (
    <>
      <Helmet>
        <title>{titlePage}</title>
      </Helmet>
      <LayoutBoard title={titlePage}></LayoutBoard>
    </>
  );
};

export default PageBoardNotice;
