import React, { ReactNode, useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { classNames as classNamesHelper } from '../../model/lib/helpers/classNames/classNames';
import { MenuItem } from '../MenuItem/MenuItem';
import { useSidebar } from '../../model/hooks/useSidebarContext';

import styles from './Collapsible.module.css';

type ClassNames = {
  container?: string;
  header?: string;
  label?: string;
  inner?: string;
  dropdown?: string;
  activeHeader?: string;
};

type CollapsibleProps = {
  classNames?: ClassNames;

  children?: ReactNode;
  label: string;
  icon: ReactNode;

  active?: boolean;
};

export const Collapsible = (props: CollapsibleProps) => {
  const { children, icon, label, active, classNames } = props;

  const { isOpen } = useSidebar();

  const [expanded, setExpanded] = useState(active);
  const [showDropdown, setShowDropdown] = useState(false);

  useLayoutEffect(() => {
    if (active) {
      setExpanded(true);
    }
  }, [active]);

  const onMouseMove = useCallback(() => {
    setShowDropdown(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setShowDropdown(false);
  }, []);

  const onMenuItemClick = useCallback(() => {
    setExpanded(true);
  }, []);

  const menuItemClassnames = useMemo(
    () => ({
      container: classNames?.header,
      label: classNames?.label,
      activeContainer: classNames?.activeHeader
    }),
    [classNames]
  );

  const getMenuItem = () => {
    return (
      <MenuItem
        icon={icon}
        label={label}
        classNames={menuItemClassnames}
        onClick={onMenuItemClick}
        active={active}
      />
    );
  };

  if (!isOpen) {
    return (
      <li
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={classNamesHelper(styles.collapsible, {}, [classNames?.container])}
      >
        {getMenuItem()}

        <div className={styles.dropdownContainer}>
          <ul
            className={classNamesHelper(
              styles.dropdown,
              { [styles.shownDropdown]: !showDropdown },
              [classNames?.dropdown]
            )}
          >
            {children}
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li className={classNames?.container}>
      {getMenuItem()}

      <BrowserView>
        {expanded ? <ul className={classNames?.inner}>{children}</ul> : null}
      </BrowserView>

      <MobileView>
        <div
          className={classNamesHelper(styles.backdrop, { [styles.backdrop_active]: expanded }, [])}
          onClick={() => {
            setExpanded(false);
          }}
        ></div>
        <div
          onClick={() => {
            setExpanded(false);
          }}
          className={classNamesHelper(
            styles.mobileMenu,
            { [styles.mobileMenu_active]: expanded },
            []
          )}
        >
          <ul className={classNames?.inner}>{children}</ul>
        </div>
      </MobileView>
    </li>
  );
};
