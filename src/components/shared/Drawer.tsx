import * as S from './Drawer.styles';

import { Fragment, useCallback } from 'react';

import SvgMonoBoard from '@assets/icons/mono-board.svg?react';
import SvgMonoMessage from '@assets/icons/mono-message.svg?react';
import SvgMonoCampaign from '@assets/icons/mono-campaign.svg?react';
import SvgMonoTemplate from '@assets/icons/mono-template.svg?react';
import SvgMonoManageDelivery from '@assets/icons/mono-manage-delivery.svg?react';
import SvgMonoReport from '@assets/icons/mono-report.svg?react';
import SvgMonoStatistics from '@assets/icons/mono-statistics.svg?react';
import SvgMonoAccounting from '@assets/icons/mono-accounting.svg?react';
import SvgMonoManageUser from '@assets/icons/mono-manage-user.svg?react';
import SvgMonoManagePush from '@assets/icons/mono-manage-push.svg?react';
import SvgMonoDashboard from '@assets/icons/mono-dashboard.svg?react';

import { useVendor } from '@hooks/use-vendor';
import { useDrawer } from '@hooks/use-drawer';
import IconCaretDown from './IconCaretDown';
import { useNavigate } from 'react-router-dom';

const className = {
  IconMenu: 'w-[24px] h-[24px] mr-[8px]',
};

const menus = [
  {
    icon: SvgMonoBoard,
    text: '게시판',
    pathname: '/board',
    children: [
      {
        text: '공지사항',
        pathname: '/board/notice',
      },
      {
        text: 'Q&A',
        pathname: '/board/qna',
      },
    ],
  },
  {
    icon: SvgMonoMessage,
    text: '메시지',
    pathname: '/message',
    children: [
      {
        text: '발송하기',
        pathname: '/message/send',
      },
    ],
  },
  {
    icon: SvgMonoCampaign,
    text: '캠페인',
    pathname: '/campaign',
    children: [],
  },
  {
    icon: SvgMonoTemplate,
    text: '템플릿',
    pathname: '/template',
    children: [],
  },
  {
    icon: SvgMonoManageDelivery,
    text: '발송 관리',
    pathname: '/manage-delivery',
    children: [],
  },
  {
    icon: SvgMonoReport,
    text: '리포트',
    pathname: '/report',
    children: [],
  },
  {
    icon: SvgMonoStatistics,
    text: '통계',
    pathname: '/statistics',
    children: [],
  },
  {
    icon: SvgMonoAccounting,
    text: '정산',
    pathname: '/accounting',
    children: [],
  },
  {
    icon: SvgMonoManageUser,
    text: '회원',
    pathname: '/manage-user',
    children: [],
  },
  {
    icon: SvgMonoManagePush,
    text: 'PUSH 사용자',
    pathname: '/manage-push',
    children: [],
  },
  {
    icon: SvgMonoDashboard,
    text: '대시보드',
    pathname: '/dashboard',
    children: [],
  },
];

const Drawer = () => {
  const navigate = useNavigate();
  const { name: nameVendor } = useVendor();
  const { isOpened } = useDrawer();
  const onClickMenu = useCallback(
    (to: string) => {
      navigate(to);
    },
    [navigate],
  );
  return (
    <S.AsideContainer
      style={{
        width: isOpened ? '224px' : '0px',
        minWidth: isOpened ? '224px' : '0px',
      }}
    >
      <S.DivContainer>
        <S.DivContainerVendor>
          <S.DivNameVendor>{nameVendor}</S.DivNameVendor>
          <IconCaretDown color="black" />
        </S.DivContainerVendor>
        <S.DivContainerMenus>
          {menus.map((menu, idx) => (
            <Fragment key={idx}>
              <S.DivContainerMenu>
                <menu.icon className={className.IconMenu}></menu.icon>
                <S.DivTextMenu onClick={() => onClickMenu(menu.pathname)}>
                  {menu.text}
                </S.DivTextMenu>
                <S.DivRemainder />
                <S.IconCheckCircle />
              </S.DivContainerMenu>
              {menu.children.map((child, idx) => (
                <S.DivContainerMenuChildren key={idx}>
                  <S.DivMenuChildren
                    onClick={() => onClickMenu(child.pathname)}
                  >
                    {child.text}
                  </S.DivMenuChildren>
                </S.DivContainerMenuChildren>
              ))}
            </Fragment>
          ))}
        </S.DivContainerMenus>
      </S.DivContainer>
    </S.AsideContainer>
  );
};

export default Drawer;
