import * as S from './Filters.styles';

import FilterCalendar from './FilterCalendar';
import FilterSearch from './FilterSearch';

const Filters = ({
  columns,
  movePageFirst,
}: {
  columns: string[];
  movePageFirst: () => void;
}) => {
  return (
    <S.DivContainer>
      <FilterCalendar movePageFirst={movePageFirst} />
      <FilterSearch
        movePageFirst={movePageFirst}
        columns={columns.filter((c) => c !== '작성일')}
      />
    </S.DivContainer>
  );
};

export default Filters;
