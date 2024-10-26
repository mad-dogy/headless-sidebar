import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
};

export const Sidebar = (props: Props) => {
  const { children, className } = props;

  /*   const { isOpen } = useSidebar(); */

  return <div className={className}>{children}</div>;
};
