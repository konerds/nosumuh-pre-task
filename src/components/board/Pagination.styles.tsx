import { tw } from '@utils/tw';

const className = {
  DivContainer: 'mt-5 flex justify-center items-center',
  DivWrapper: 'flex justify-between items-center gap-x-4',
  ButtonNumber: 'p-1 haa-global',
};

export const DivContainer = tw('div', className.DivContainer);

export const DivWrapper = tw('div', className.DivWrapper);

export const ButtonNumber = tw('button', className.ButtonNumber);
