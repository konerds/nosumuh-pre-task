import { tw } from '@utils/tw';

const className = {
  DivContainer: 'flex items-center gap-x-4 mr-4',
  LabelInput: 'flex justify-center items-center',
  Input: 'border border-gray-300 rounded p-1 haa-global',
};

export const DivContainer = tw('div', className.DivContainer);

export const LabelInput = tw('label', className.LabelInput);

export const Input = tw('input', className.Input);
