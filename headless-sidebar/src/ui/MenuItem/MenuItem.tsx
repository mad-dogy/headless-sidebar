import React, { ReactNode, useCallback } from 'react';

import { classNames as classNamesHelper } from '../../model/lib/helpers/classNames/classNames';
import { useSidebar } from '../../model/hooks/useSidebarContext';

import styles from './MenuItem.module.css';

type ClassNames = {
  container?: string;
  activeContainer?: string;
  label?: string;
  closedContainer?: string;
};

type MenuItemProps = {
  id?: string;
  classNames?: ClassNames;
  icon?: ReactNode;
  RootComponent?: React.ReactElement;
  active?: boolean;
  onClick?: () => void;
} & ({ label: string; children?: never } | { children: ReactNode; label?: never });

export const MenuItem = (props: MenuItemProps) => {
  const { label, icon, children, RootComponent, onClick, active, id, classNames } = props;
  const { isOpen, onItemChange } = useSidebar();

  const onClickHandler = useCallback(() => {
    if (!active) {
      onItemChange?.(id);
    }

    onClick?.();
  }, [active, onClick, onItemChange, id]);

  const getContent = () => {
    if (!icon) {
      return <div className={classNames?.label}>{label}</div>;
    }

    if (!isOpen) {
      return icon;
    }

    if (label) {
      return (
        <>
          {icon}
          <div className={classNames?.label}>{label}</div>
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

  const innerClassName = classNamesHelper('', { [classNames?.activeContainer || '']: active }, [
    classNames?.container
  ]);

  return (
    <li onClick={onClickHandler} className={isOpen ? undefined : styles.container_close}>
      {RootComponent ? (
        React.cloneElement(
          RootComponent,
          {
            ...RootComponent.props,
            className: innerClassName
          },
          <>{getContent()}</>
        )
      ) : (
        <button aria-pressed className={innerClassName}>
          {getContent()}
        </button>
      )}
    </li>
  );
};
