import * as S from './LayoutRoot.styles';

import { Outlet } from 'react-router-dom';

import Header from '@components/shared/Header';
import Drawer from '@components/shared/Drawer';

const LayoutRoot = () => {
  return (
    <>
      <Header />
      <S.MainContainer>
        <Drawer />
        <S.DivContainerOutlet>
          <Outlet />
        </S.DivContainerOutlet>
      </S.MainContainer>
    </>
  );
};

export default LayoutRoot;
