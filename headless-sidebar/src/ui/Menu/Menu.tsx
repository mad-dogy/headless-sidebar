import React, { ReactNode } from 'react';

export type MenuProps = {
  className?: string;
  children?: ReactNode;
  isSidebarOpen?: boolean;
};

export const Menu = (props: MenuProps) => {
  const { className, children, isSidebarOpen } = props;

  return <div className={className}>{children}</div>;
};
