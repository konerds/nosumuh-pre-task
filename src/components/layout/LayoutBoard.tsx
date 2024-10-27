import * as S from './LayoutBoard.styles';

import { FC } from 'react';

import Breadcrumb from '@components/shared/Breadcrumb';

const LayoutBoard: FC<{ title: string } & React.PropsWithChildren> = ({
  title,
  children,
}) => {
  return (
    <S.DivContainer>
      <Breadcrumb title={title} entries={['게시판', title]} />
      <S.DivContainerMain>
        <S.DivWrapperMain>{children}</S.DivWrapperMain>
      </S.DivContainerMain>
    </S.DivContainer>
  );
};

export default LayoutBoard;
