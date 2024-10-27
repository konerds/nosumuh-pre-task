import SvgMonoCaretDown from '@assets/icons/mono-caret-down.svg?react';

const className = {
  IconCaretDown: 'w-[16px] h-[16px] h-rotate-180',
};

const IconCaretDown = ({ color }: { color: 'white' | 'black' }) => {
  return (
    <SvgMonoCaretDown
      className={`${color === 'white' ? 'fill-white' : 'fill-black'} ${
        className.IconCaretDown
      }`}
    />
  );
};

export default IconCaretDown;
