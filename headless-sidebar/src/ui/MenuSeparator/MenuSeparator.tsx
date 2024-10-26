import React from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';
import { useSidebar } from '../../model/hooks/useSidebarContext';

import './MenuSeparator.css';

export type MenuSeparatorProps = {
  className?: string;
};

export const MenuSeparator = (props: MenuSeparatorProps) => {
  const { className } = props;

  const { isOpen } = useSidebar();

  return <div className={classNames('separator', {}, [className])} />;
};
