import React, { ReactNode } from 'react';

import { MenuItem } from '../MenuItem/MenuItem';
import { useSidebar } from '../../model/hooks/useSidebarContext';

type CollapsibleProps = {
  className?: string;
  headerClassName?: string;
  labelClassName?: string;
  innerClassName?: string;
  children?: ReactNode;
  label: string;
  icon: ReactNode;
  isActive?: boolean;
};

export const Collapsible = (props: CollapsibleProps) => {
  const { className, children, icon, label, labelClassName, innerClassName, headerClassName } =
    props;

  const { isOpen } = useSidebar();

  if (!isOpen) {
    return (
      <MenuItem
        icon={icon}
        label={label}
        className={headerClassName}
        labelClassName={labelClassName}
      />
    );
  }

  return (
    <li className={className}>
      <MenuItem
        icon={icon}
        label={label}
        className={headerClassName}
        labelClassName={labelClassName}
      />

      <ul className={innerClassName} title={label}>
        {children}
      </ul>
    </li>
  );
};
