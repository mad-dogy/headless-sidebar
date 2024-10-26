import React, { ReactNode } from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';
import { useSidebar } from '../../model/hooks/useSidebarContext';

import './Sidebar.css';

type Props = {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
};

export const Sidebar = (props: Props) => {
  const { children, className } = props;

  const { isOpen } = useSidebar();

  return <div className={classNames('container', {}, [className])}>{children}</div>;
};
