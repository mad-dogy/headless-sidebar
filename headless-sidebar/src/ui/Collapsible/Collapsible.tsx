import React, { ReactNode, useCallback, useState } from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';
import { MenuItem } from '../MenuItem/MenuItem';
import { useSidebar } from '../../model/hooks/useSidebarContext';

import styles from './Collapsible.module.css';

type CollapsibleProps = {
  className?: string;
  headerClassName?: string;
  labelClassName?: string;
  innerClassName?: string;
  dropdownMenuClassName?: string;

  children?: ReactNode;
  label: string;
  icon: ReactNode;
  isActive?: boolean;
};

export const Collapsible = (props: CollapsibleProps) => {
  const {
    className,
    children,
    icon,
    label,
    labelClassName,
    innerClassName,
    headerClassName,
    dropdownMenuClassName
  } = props;

  const { isOpen } = useSidebar();

  const [openMenu, setOpenMenu] = useState(false);

  const onMouseMove = useCallback(() => {
    setOpenMenu(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setOpenMenu(false);
  }, []);

  if (!isOpen) {
    return (
      <li
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={classNames(styles.collapsible)}
      >
        <MenuItem
          icon={icon}
          label={label}
          className={headerClassName}
          labelClassName={labelClassName}
        />

        {openMenu ? (
          <div className={styles.menuContainer}>
            <ul className={classNames(styles.menu, {}, [dropdownMenuClassName])}>{children}</ul>
          </div>
        ) : null}
      </li>
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
