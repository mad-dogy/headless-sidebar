import React, { ReactNode } from 'react';

import { Title } from '../Title/Title';
import { Menu } from '../Menu/Menu';
import { MenuSeparator } from '../MenuSeparator/MenuSeparator';
import { MenuItem } from '../MenuItem/MenuItem';
import { SidebarContext } from '../../model/constants/sidebarContext';
import { Sidebar } from '../Sidebar/Sidebar';
import { Custom } from '../Custom/Custom';
import { Collapsible } from '../Collapsible/Collapsible';
import { ToggleButton } from '../ToggleButton/ToggleButton';

import styles from './Entry.module.css';

type Props = {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
};

export const Entry = (props: Props) => {
  const { children, className, isOpen = true } = props;

  const memoizedContextValue = React.useMemo(
    () => ({
      isOpen
    }),
    [isOpen]
  );

  return (
    <SidebarContext.Provider value={memoizedContextValue}>
      <div className={styles['headless-sidebar-entry']}>
        <Sidebar className={className}>{children}</Sidebar>
      </div>
    </SidebarContext.Provider>
  );
};

Entry.Title = Title;

Entry.Menu = Menu;

Entry.MenuItem = MenuItem;

Entry.MenuSeparator = MenuSeparator;

Entry.Custom = Custom;

Entry.Collapsible = Collapsible;

Entry.ToggleButton = ToggleButton;
