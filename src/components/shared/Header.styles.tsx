import { tw } from '@utils/tw';

import SvgMonoHamburger from '@assets/icons/mono-hamburger.svg?react';
import SvgColorSmile from '@assets/icons/color-smile.svg?react';

const className = {
  HeaderContainer:
    'bg-[#008850] w-full h-[64px] flex justify-between items-center px-[16px] text-white',
  IconHamburger: 'w-[56px] h-[56px] ml-[-8px] mr-[16px] haa-global',
  DivContainerTitle: 'flex items-end gap-x-[8px] haa-global',
  DivRemainder: 'flex-1',
  Heading1Title: 'font-bold leading-[100%]',
  ParagraphTitle: 'leading-[100%]',
  DivContainerProfile: 'flex-0 flex items-center',
  DivContainerIconSmile:
    'w-[32px] h-[32px] flex justify-center items-center rounded-full bg-[#f4f4f4]',
  IconSmile: 'w-[24px] h-[24px] haa-global',
  Heading4NameVendor: 'flex items-center mx-[16px] haa-global',
};

export const HeaderContainer = tw('header', className.HeaderContainer);

export const IconHamburger = tw(SvgMonoHamburger, className.IconHamburger);

export const DivContainerTitle = tw('div', className.DivContainerTitle);

export const DivRemainder = tw('div', className.DivRemainder);

export const Heading1Title = tw('h1', className.Heading1Title);

export const ParagraphTitle = tw('p', className.ParagraphTitle);

export const DivContainerProfile = tw('div', className.DivContainerProfile);

export const DivContainerIconSmile = tw('div', className.DivContainerIconSmile);

export const IconSmile = tw(SvgColorSmile, className.IconSmile);

export const Heading4NameVendor = tw('h4', className.Heading4NameVendor);
