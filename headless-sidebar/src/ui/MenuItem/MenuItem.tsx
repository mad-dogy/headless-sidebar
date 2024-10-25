import React, { ReactNode } from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';

export type MenuItemProps = {
  className?: string;
  activeClassName?: string;

  isActive?: boolean;
  isSidebarOpen?: boolean;
} & (
  | { label: string; icon?: ReactNode; children?: never }
  | { children: ReactNode; label?: never; icon?: never }
);

export const MenuItem = (props: MenuItemProps) => {
  const { className, label, icon, isActive = false, activeClassName = '', children } = props;

  return (
    <div className={classNames('', { [activeClassName]: isActive }, [className])}>
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
