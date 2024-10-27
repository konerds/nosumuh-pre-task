import { tw } from '@utils/tw';

import SvgMonoHome from '@assets/icons/mono-home.svg?react';

const className = {
  SectionContainer:
    'w-full h-[52px] flex justify-between items-center bg-white border-b-[#008850] border-b-2 px-[24px]',
  Heading2Title: 'flex-grow-0 haa-global',
  DivRemainder: 'flex-1',
  DivContainerBreadcrumb:
    'flex justify-between items-center gap-x-[8px] text-gray-400',
  IconHome: 'w-[16px] h-[16px] haa-global',
  DivEntry: 'haa-global',
};

export const SectionContainer = tw('section', className.SectionContainer);

export const Heading2Title = tw('h2', className.Heading2Title);

export const DivRemainder = tw('div', className.DivRemainder);

export const DivContainerBreadcrumb = tw(
  'div',
  className.DivContainerBreadcrumb,
);

export const IconHome = tw(SvgMonoHome, className.IconHome);

export const DivEntry = tw('div', className.DivEntry);
