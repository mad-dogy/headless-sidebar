import React, { ReactNode } from 'react';

type MenuProps = {
  className?: string;
  children?: ReactNode;
};

export const Menu = (props: MenuProps) => {
  const { className, children } = props;

  return <ul className={className}>{children}</ul>;
};
