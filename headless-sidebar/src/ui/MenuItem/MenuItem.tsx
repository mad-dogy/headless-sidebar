import React, { ReactNode } from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';
import { useSidebar } from '../../model/hooks/useSidebarContext';

export type MenuItemProps = {
  className?: string;
  activeClassName?: string;

  isSidebarOpen?: boolean;

  icon: ReactNode;
} & ({ label: string; children?: never } | { children: ReactNode; label?: never });

export const MenuItem = (props: MenuItemProps) => {
  const { className, label, icon, activeClassName = '', children } = props;

  const { isOpen } = useSidebar();

  return (
    <div className={classNames('', { [activeClassName]: isOpen }, [className])}>
      {label ? (
        <>
          {icon}

          <div>{label}</div>
        </>
      ) : (
        children
      )}
    </div>
  );
};
