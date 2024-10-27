import { useFilter } from '@hooks/use-filter';
import * as S from './FilterCalendar.styles';

const FilterCalendar = ({ movePageFirst }: { movePageFirst: () => void }) => {
  const { createdAt, setCreatedAt } = useFilter();
  const onChangeCreatedAt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreatedAt(e.target.value);
    movePageFirst();
  };
  const onKeydownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setCreatedAt(e.currentTarget.value);
      movePageFirst();
    }
  };
  return (
    <S.DivContainer>
      <S.LabelInput>등록일 기준</S.LabelInput>
      <S.Input
        type="date"
        placeholder=""
        value={createdAt}
        onChange={onChangeCreatedAt}
        onKeyDown={onKeydownInput}
      />
    </S.DivContainer>
  );
};

export default FilterCalendar;
