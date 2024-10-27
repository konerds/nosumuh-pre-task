import { tw } from '@utils/tw';

const className = {
  MainContainer: 'flex-1 w-full flex flex-nowrap',
  DivContainerOutlet: 'flex-1 bg-[#eaeaea]',
};

export const MainContainer = tw('main', className.MainContainer);

export const DivContainerOutlet = tw('div', className.DivContainerOutlet);
