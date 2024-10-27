import React, { ReactNode, useCallback, useLayoutEffect, useState } from 'react';

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
  activeClassName?: string;

  children?: ReactNode;
  label: string;
  icon: ReactNode;

  active?: boolean;
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
    dropdownMenuClassName,
    activeClassName,
    active
  } = props;

  const { isOpen } = useSidebar();

  const [expanded, setExpanded] = useState(active);
  const [openMenu, setOpenMenu] = useState(false);

  useLayoutEffect(() => {
    if (active) {
      setExpanded(true);
    }
  }, [active]);

  const onMouseMove = useCallback(() => {
    setOpenMenu(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setOpenMenu(false);
  }, []);

  const onMenuItemClick = useCallback(() => {
    setExpanded(true);
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
          activeClassName={activeClassName}
          active={active}
        />

        <div className={styles.menuContainer}>
          <ul
            className={classNames(styles.menu, { [styles.menuOpened]: !openMenu }, [
              dropdownMenuClassName
            ])}
          >
            {children}
          </ul>
        </div>
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
        activeClassName={activeClassName}
        onClick={onMenuItemClick}
        active={active}
      />

      {expanded ? (
        <ul className={innerClassName} title={label}>
          {children}
        </ul>
      ) : null}
    </li>
  );
};
