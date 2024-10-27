import React, { ReactNode, useCallback } from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';
import { useSidebar } from '../../model/hooks/useSidebarContext';

type MenuItemProps = {
  id?: string;

  className?: string;
  activeClassName?: string;
  labelClassName?: string;

  icon?: ReactNode;
  RootComponent?: React.ReactElement;

  active?: boolean;

  onClick?: () => void;
} & ({ label: string; children?: never } | { children: ReactNode; label?: never });

export const MenuItem = (props: MenuItemProps) => {
  const {
    className,
    activeClassName = '',
    labelClassName,
    label,
    icon,
    children,
    RootComponent,
    onClick,
    active,
    id
  } = props;
  const { isOpen, onItemChange } = useSidebar();

  const onClickHandler = useCallback(() => {
    if (!active) {
      onItemChange?.(id);
    }

    onClick?.();
  }, [active, onClick, onItemChange, id]);

  const getContent = () => {
    if (!icon) {
      return <div className={labelClassName}>{label}</div>;
    }

    if (!isOpen) {
      return icon;
    }

    if (label) {
      return (
        <>
          {icon}
          <div className={labelClassName}>{label}</div>
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
    <li onClick={onClickHandler}>
      {RootComponent ? (
        React.cloneElement(
          RootComponent,
          {
            ...RootComponent.props,
            className: classNames('', { [activeClassName]: active }, [className])
          },
          <>{getContent()}</>
        )
      ) : (
        <div className={classNames('', { [activeClassName]: active }, [className])}>
          {getContent()}
        </div>
      )}
    </li>
  );
};
