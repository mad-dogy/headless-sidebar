import React, { ReactNode } from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';
import { useSidebar } from '../../model/hooks/useSidebarContext';

import styles from './MenuItem.module.css';

export type MenuItemProps = {
  className?: string;
  activeClassName?: string;

  isActive?: boolean;

  icon: ReactNode;

  RootComponent?: React.ReactElement;

  onClick?: () => void;
} & ({ label: string; children?: never } | { children: ReactNode; label?: never });

export const MenuItem = (props: MenuItemProps) => {
  const { className, label, icon, isActive, activeClassName = '', children, RootComponent } = props;
  const { isOpen } = useSidebar();

  const getContent = () => {
    if (isOpen) {
      return icon;
    }

    if (label) {
      return (
        <>
          {icon}

          <div>{label}</div>
        </>
      );
    }

    return (
      <>
        {icon}

        {children}
      </>
    );
  };

  return (
    <li className={classNames(styles.menuItem, { [activeClassName]: isActive }, [className])}>
      {RootComponent ? (
        React.cloneElement(RootComponent, RootComponent.props, <>{getContent()}</>)
      ) : (
        <div>{getContent()}</div>
      )}
    </li>
  );
};
