import { Helmet } from 'react-helmet-async';

import LayoutBoard from '@components/layout/LayoutBoard';

const titlePage = 'Q&A';

const PageBoardQna = () => {
  return (
    <>
      <Helmet>
        <title>{titlePage}</title>
      </Helmet>
      <LayoutBoard title={titlePage}></LayoutBoard>
    </>
  );
};

export default PageBoardQna;
