import { ElementType, FC, PropsWithChildren, createElement } from 'react';

type PropsStyledComponent<T extends ElementType> =
  React.ComponentPropsWithoutRef<T>;

export const tw =
  <T extends ElementType>(
    nameTag: T,
    className: string,
  ): FC<PropsWithChildren<PropsStyledComponent<T>>> =>
  ({ children, ...props }) =>
    createElement(nameTag, { className, ...props }, children);
