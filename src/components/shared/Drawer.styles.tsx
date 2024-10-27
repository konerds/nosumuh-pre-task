import { tw } from '@utils/tw';

import SvgCheckCircle from '@assets/icons/check-circle.svg?react';

const className = {
  AsideContainer: 'transition-width bg-white',
  DivContainer: 'flex flex-col justify-center',
  DivContainerVendor:
    'h-[52px] flex justify-center items-center border-b-[#008850] border-b-2 [box-shadow:inset_-2px_0px_#eeeeee]',
  DivNameVendor: 'mr-[8px]',
  DivContainerMenus: 'flex flex-col gap-y-[8px] justify-center',
  DivContainerMenu: 'flex items-center px-[16px] py-[10px] border-b-[1px]',
  DivTextMenu: 'font-semibold haa-global',
  DivRemainder: 'flex-1',
  IconCheckCircle: 'w-[20px] h-[20px] mr-[8px] opacity-10 haa-global',
  DivContainerMenuChildren: 'flex items-center pl-[36px] py-[4px]',
  DivMenuChildren: 'haa-global',
};

export const AsideContainer = tw('aside', className.AsideContainer);

export const DivContainer = tw('div', className.DivContainer);

export const DivContainerVendor = tw('div', className.DivContainerVendor);

export const DivNameVendor = tw('div', className.DivNameVendor);

export const DivContainerMenus = tw('div', className.DivContainerMenus);

export const DivContainerMenu = tw('div', className.DivContainerMenu);

export const DivTextMenu = tw('div', className.DivTextMenu);

export const DivRemainder = tw('div', className.DivRemainder);

export const IconCheckCircle = tw(SvgCheckCircle, className.IconCheckCircle);

export const DivContainerMenuChildren = tw(
  'div',
  className.DivContainerMenuChildren,
);

export const DivMenuChildren = tw('div', className.DivMenuChildren);
