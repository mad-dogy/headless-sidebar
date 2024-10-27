import React, { ReactNode } from 'react';

import { useSidebar } from '../../model/hooks/useSidebarContext';

export type SidebarProps = {
  children?: ReactNode;
  className?: string;
  closedClassName?: string;
};

export const Sidebar = (props: SidebarProps) => {
  const { children, className, closedClassName } = props;

  const { isOpen } = useSidebar();

  return <div className={isOpen ? className : closedClassName}>{children}</div>;
};
