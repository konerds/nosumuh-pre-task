import * as S from './FilterSearch.styles';

import { useState } from 'react';

import { useFilter } from '@hooks/use-filter';

const FilterSearch = ({
  columns,
  movePageFirst,
}: {
  columns: string[];
  movePageFirst: () => void;
}) => {
  const { type, keyword, setType, setKeyword } = useFilter();
  const [typeEntered, setTypeEntered] = useState(type);
  const [keywordEntered, setKeywordEntered] = useState(keyword);
  const onChangeSelectCondition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeEntered(e.target.value);
  };
  const onChangeInputKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywordEntered(e.target.value);
  };
  const onClickButtonSearch = () => {
    setType(typeEntered);
    setKeyword(keywordEntered);
    movePageFirst();
  };
  const onKeydownInputKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickButtonSearch();
    }
  };
  return (
    <S.DivContainer>
      <S.LabelInput>검색 조건</S.LabelInput>
      <S.SelectCondition value={typeEntered} onChange={onChangeSelectCondition}>
        {columns.map((col, idx) => (
          <S.OptionCondition key={idx} value={col}>
            {col}
          </S.OptionCondition>
        ))}
      </S.SelectCondition>
      <S.Input
        value={keywordEntered}
        onChange={onChangeInputKeyword}
        onKeyDown={onKeydownInputKeyword}
      />
      <S.ButtonSearch onClick={onClickButtonSearch}>
        <S.IconSearch />
      </S.ButtonSearch>
    </S.DivContainer>
  );
};

export default FilterSearch;
