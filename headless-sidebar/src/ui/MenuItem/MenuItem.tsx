import React, { ReactNode } from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';
import { useSidebar } from '../../model/hooks/useSidebarContext';

import styles from './MenuItem.module.css';

type MenuItemProps = {
  className?: string;
  activeClassName?: string;
  labelClassName?: string;

  isActive?: boolean;
  icon?: ReactNode;
  RootComponent?: React.ReactElement;

  onClick?: () => void;
} & ({ label: string; children?: never } | { children: ReactNode; label?: never });

export const MenuItem = (props: MenuItemProps) => {
  const {
    className,
    activeClassName = '',
    labelClassName,
    label,
    icon,
    isActive,
    children,
    RootComponent
  } = props;
  const { isOpen } = useSidebar();

  const getContent = () => {
    if (!isOpen) {
      return icon;
    }

    if (label) {
      return (
        <>
          {icon}
          <div className={classNames(styles.label, {}, [labelClassName])}>{label}</div>
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
        React.cloneElement(
          RootComponent,
          { ...RootComponent.props, className: styles.menuItemInner },
          <>{getContent()}</>
        )
      ) : (
        <div className={styles.menuItemInner}>{getContent()}</div>
      )}
    </li>
  );
};
