import React, { ReactNode } from 'react';

export type MenuProps = {
  className?: string;
  children?: ReactNode;
};

export const Menu = (props: MenuProps) => {
  const { className, children } = props;

  return <div className={className}>{children}</div>;
};
