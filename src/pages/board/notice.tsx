import { Helmet } from 'react-helmet-async';

import { useLoaderData } from 'react-router-dom';
import { IResponseBoard } from '@/interfaces';

import LayoutBoard from '@components/layout/LayoutBoard';
import Filters from '@components/board/Filters';
import Table from '@components/board/Table';
import { useCallback, useState } from 'react';

const PageBoardNotice = () => {
  const { rMetadata, rBoard } = useLoaderData() as IResponseBoard;
  const { columns } = rMetadata;
  const { name: titlePage, posts } = rBoard;
  const [pageCurrent, setPageCurrent] = useState(1);
  const movePageFirst = useCallback(() => {
    setPageCurrent(1);
  }, []);
  const movePagePrev = useCallback(() => {
    setPageCurrent((prev) => prev - 1);
  }, []);
  const movePageNext = useCallback(() => {
    setPageCurrent((prev) => prev + 1);
  }, []);
  const movePage = useCallback((dest: number) => {
    setPageCurrent(dest);
  }, []);
  return (
    <>
      <Helmet>
        <title>{titlePage}</title>
      </Helmet>
      <LayoutBoard title={titlePage}>
        <Filters movePageFirst={movePageFirst} columns={columns} />
        <Table
          pageCurrent={pageCurrent}
          movePageFirst={movePageFirst}
          movePagePrev={movePagePrev}
          movePageNext={movePageNext}
          movePage={movePage}
          columns={columns}
          posts={posts}
        />
      </LayoutBoard>
    </>
  );
};

export default PageBoardNotice;
