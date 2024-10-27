import * as S from './Pagination.styles';

const Pagination = ({
  pageCurrent,
  pageLast,
  movePageFirst,
  movePagePrev,
  movePageNext,
  movePageLast,
  movePage,
}: {
  pageCurrent: number;
  pageLast: number;
  movePageFirst: () => void;
  movePagePrev: () => void;
  movePageNext: () => void;
  movePageLast: () => void;
  movePage: (dest: number) => void;
}) => {
  return (
    <S.DivContainer>
      <S.DivWrapper>
        {pageCurrent > 1 && (
          <>
            <S.ButtonNumber onClick={movePageFirst}>{'<<'}</S.ButtonNumber>
            <S.ButtonNumber onClick={movePagePrev}>{'<'}</S.ButtonNumber>
          </>
        )}
        {Array.from({ length: pageLast }, (_, i) => i + 1).map((page) => (
          <S.ButtonNumber
            key={page}
            style={{
              fontWeight: page === pageCurrent ? 'bold' : 'normal',
            }}
            onClick={() => movePage(page)}
          >
            {page}
          </S.ButtonNumber>
        ))}
        {pageCurrent < pageLast && (
          <>
            <S.ButtonNumber onClick={movePageNext}>{'>'}</S.ButtonNumber>
            <S.ButtonNumber onClick={movePageLast}>{'>>'}</S.ButtonNumber>
          </>
        )}
      </S.DivWrapper>
    </S.DivContainer>
  );
};

export default Pagination;
