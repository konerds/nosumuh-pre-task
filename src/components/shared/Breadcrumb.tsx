import * as S from './Breadcrumb.styles';

import { Fragment } from 'react';

const Breadcrumb = ({
  title,
  entries,
}: {
  title: string;
  entries: string[];
}) => {
  return (
    <S.SectionContainer>
      <S.Heading2Title>{title}</S.Heading2Title>
      <S.DivRemainder></S.DivRemainder>
      <S.DivContainerBreadcrumb>
        <S.IconHome />
        {entries.map((entry, index) => (
          <Fragment key={index}>
            <div> / </div>
            <S.DivEntry>{entry}</S.DivEntry>
          </Fragment>
        ))}
      </S.DivContainerBreadcrumb>
    </S.SectionContainer>
  );
};

export default Breadcrumb;
