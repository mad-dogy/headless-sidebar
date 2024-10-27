import React, { ReactNode } from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';
import { useSidebar } from '../../model/hooks/useSidebarContext';

type MenuItemProps = {
  className?: string;
  activeClassName?: string;
  labelClassName?: string;

  isActive?: boolean;
  icon?: ReactNode;
  RootComponent?: React.ReactElement;

  isInsideCollapbible?: boolean;

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
    RootComponent,
    isInsideCollapbible
  } = props;
  const { isOpen } = useSidebar();

  const getContent = () => {
    if (isInsideCollapbible) {
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
    <li className={classNames('', { [activeClassName]: isActive }, [className])}>
      {RootComponent
        ? React.cloneElement(RootComponent, RootComponent.props, <>{getContent()}</>)
        : getContent()}
    </li>
  );
};
