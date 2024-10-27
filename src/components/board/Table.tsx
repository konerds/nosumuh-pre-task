import * as S from './Table.styles';

import { useCallback, useLayoutEffect, useMemo, useState } from 'react';

import { IPost } from '@/interfaces';
import { useFilter } from '@hooks/use-filter';
import Pagination from './Pagination';

const limitPerPage = 5;

const Table = ({
  columns,
  posts,
  pageCurrent,
  movePageFirst,
  movePagePrev,
  movePageNext,
  movePage,
}: {
  columns: string[];
  posts: IPost[];
  pageCurrent: number;
  movePageFirst: () => void;
  movePagePrev: () => void;
  movePageNext: () => void;
  movePage: (dest: number) => void;
}) => {
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
  const { createdAt, type, keyword } = useFilter();
  const pageLast = useMemo(
    () => Math.ceil(filteredPosts.length / limitPerPage),
    [filteredPosts],
  );
  const movePageLast = useCallback(() => {
    movePage(pageLast);
  }, [movePage, pageLast]);
  useLayoutEffect(() => {
    let newFilteredPosts = [...posts];
    if (createdAt.length > 0) {
      newFilteredPosts = newFilteredPosts.filter((post) =>
        post.created_at.startsWith(createdAt),
      );
    }
    if (type.length > 0 && keyword.length > 0) {
      newFilteredPosts = newFilteredPosts.filter((post) => {
        if (type === 'ID') {
          return post.id === +keyword;
        }
        if (type === '제목') {
          return post.title.includes(keyword);
        }
        if (type === '작성자(ID)') {
          return (
            post.author.includes(keyword) ||
            post.nickname_author.includes(keyword)
          );
        }
        if (type === '조회수') {
          return post.views === +keyword;
        }
        return false;
      });
    }
    setFilteredPosts(newFilteredPosts);
  }, [posts, pageCurrent, createdAt, type, keyword]);
  return (
    <S.DivContainer>
      <S.DivContainerHeader>
        <div>전체 글&nbsp;&nbsp;{filteredPosts.length}</div>
      </S.DivContainerHeader>
      <S.Table>
        <S.TableHead>
          <S.TableRow>
            {columns.map((col, idx) => (
              <S.TableCell key={idx}>{col}</S.TableCell>
            ))}
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {filteredPosts
            .slice((pageCurrent - 1) * limitPerPage, pageCurrent * limitPerPage)
            .map((post) => (
              <S.TableRow key={post.id}>
                <S.TableCell>{post.id}</S.TableCell>
                <S.TableCell>{post.title}</S.TableCell>
                <S.TableCell>{`${post.nickname_author}(${post.author})`}</S.TableCell>
                <S.TableCell>{post.created_at}</S.TableCell>
                <S.TableCell>{post.views}</S.TableCell>
              </S.TableRow>
            ))}
        </S.TableBody>
      </S.Table>
      <Pagination
        pageCurrent={pageCurrent}
        pageLast={pageLast}
        movePageFirst={movePageFirst}
        movePagePrev={movePagePrev}
        movePageNext={movePageNext}
        movePageLast={movePageLast}
        movePage={movePage}
      />
    </S.DivContainer>
  );
};

export default Table;
