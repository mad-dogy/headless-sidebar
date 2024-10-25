import React, { createContext, ReactNode } from 'react';

import { Title, TitleProps } from '../Title/Title';
import { classNames } from '../../model/lib/helpers/classNames/classNames';
import { Menu, MenuProps } from '../Menu/Menu';
import { MenuItem, MenuItemProps } from '../MenuItem/MenuItem';
import { MenuSeparator } from '../MenuSeparator/MenuSeparator';

import './Sidebar.css';

type Props = {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
};

const SidebarContext = createContext<Props | undefined>(undefined);

export const Sidebar = (props: Props) => {
  const { children, className, isOpen = true } = props;

  const memoizedContextValue = React.useMemo(
    () => ({
      isOpen
    }),
    [isOpen]
  );

  return (
    <SidebarContext.Provider value={memoizedContextValue}>
      <div className={classNames('container', {}, [className])}>{children}</div>
    </SidebarContext.Provider>
  );
};

function useSidebar() {
  const context = React.useContext(SidebarContext);

  if (!context) {
    throw new Error('This component must be used within a <Sidebar> component.');
  }

  return context;
}

Sidebar.Title = function SidebarTitle(props: TitleProps) {
  const { isOpen } = useSidebar();
  return <Title isSidebarOpen={isOpen} {...props} />;
};

Sidebar.Menu = function SidebarMenu(props: MenuProps) {
  const { isOpen } = useSidebar();
  return <Menu isSidebarOpen={isOpen} {...props} />;
};

Sidebar.MenuItem = function SidebarMenuItem(props: MenuItemProps) {
  const { isOpen } = useSidebar();
  return <MenuItem isSidebarOpen={isOpen} {...props} />;
};

Sidebar.MenuSeparator = MenuSeparator;
