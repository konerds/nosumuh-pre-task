import * as S from './Header.styles';

import { useVendor } from '@hooks/use-vendor';
import { useDrawer } from '@hooks/use-drawer';
import IconCaretDown from './IconCaretDown';

const Header = () => {
  const { name: nameVendor } = useVendor();
  const { toggle } = useDrawer();
  return (
    <S.HeaderContainer>
      <S.IconHamburger onClick={toggle} />
      <S.DivContainerTitle>
        <S.Heading1Title>TMS</S.Heading1Title>
        <S.ParagraphTitle>Total Marketing Server</S.ParagraphTitle>
      </S.DivContainerTitle>
      <S.DivRemainder />
      <S.DivContainerProfile>
        <S.DivContainerIconSmile>
          <S.IconSmile />
        </S.DivContainerIconSmile>
        <S.Heading4NameVendor>{nameVendor}</S.Heading4NameVendor>
        <IconCaretDown color="white" />
      </S.DivContainerProfile>
    </S.HeaderContainer>
  );
};

export default Header;
