import { tw } from '@utils/tw';

import SvgMonoSearch from '@assets/icons/mono-search.svg?react';

const className = {
  DivContainer: 'flex items-center gap-x-4',
  LabelInput: 'flex items-center',
  SelectCondition: 'border border-gray-300 rounded p-2 haa-global mr-8',
  OptionCondition: '',
  Input: 'border border-gray-300 rounded p-[6px] haa-global',
  ButtonSearch: 'bg-[#666] text-white rounded p-1',
  IconSearch: 'w-[24px] h-[24px] border-none haa-global',
};

export const DivContainer = tw('div', className.DivContainer);

export const LabelInput = tw('label', className.LabelInput);

export const SelectCondition = tw('select', className.SelectCondition);

export const OptionCondition = tw('option', className.OptionCondition);

export const Input = tw('input', className.Input);

export const ButtonSearch = tw('button', className.ButtonSearch);

export const IconSearch = tw(SvgMonoSearch, className.IconSearch);
