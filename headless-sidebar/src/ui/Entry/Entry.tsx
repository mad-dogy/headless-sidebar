import React, { ReactNode } from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';
import { Title } from '../Title/Title';
import { Menu } from '../Menu/Menu';
import { MenuSeparator } from '../MenuSeparator/MenuSeparator';
import { MenuItem } from '../MenuItem/MenuItem';
import { SidebarContext } from '../../model/constants/sidebarContext';
import { Sidebar } from '../Sidebar/Sidebar';
import { Custom } from '../Custom/Custom';
import { Colapsable } from '../Colapsable/Colapsable';

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
      <Sidebar className={classNames(styles['headless-sidebar-entry'], {}, [className])}>
        {children}
      </Sidebar>
    </SidebarContext.Provider>
  );
};

Entry.Title = Title;

Entry.Menu = Menu;

Entry.MenuItem = MenuItem;

Entry.MenuSeparator = MenuSeparator;

Entry.Custom = Custom;

Entry.Colapsable = Colapsable;
