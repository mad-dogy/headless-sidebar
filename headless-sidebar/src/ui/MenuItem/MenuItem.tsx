import React, { ReactNode } from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';
import { useSidebar } from '../../model/hooks/useSidebarContext';

export type MenuItemProps = {
  className?: string;
  activeClassName?: string;

  isSidebarOpen?: boolean;

  icon: ReactNode;

  RootComponent?: React.ReactElement;

  onClick?: () => void;
} & ({ label: string; children?: never } | { children: ReactNode; label?: never });

export const MenuItem = (props: MenuItemProps) => {
  const { className, label, icon, activeClassName = '', children, RootComponent } = props;
  const { isOpen } = useSidebar();

  const getContent = () => {
    if (label) {
      return (
        <>
          {icon}

          <div>{label}</div>
        </>
      );
    }

    return children;
  };

  return (
    <li className={classNames('', { [activeClassName]: isOpen }, [className])}>
      {RootComponent ? (
        React.cloneElement(RootComponent, RootComponent.props, <>{getContent()}</>)
      ) : (
        <div>{getContent()}</div>
      )}
    </li>
  );
};
