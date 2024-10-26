import { tw } from '@utils/tw';

const className = {
  DivContainer: 'h-full flex flex-col',
  DivContainerMain: 'flex-1 flex-col p-[24px]',
  DivWrapperMain: 'h-full rounded-2xl bg-white p-[24px]',
};

export const DivContainer = tw('div', className.DivContainer);

export const DivContainerMain = tw('div', className.DivContainerMain);

export const DivWrapperMain = tw('div', className.DivWrapperMain);
