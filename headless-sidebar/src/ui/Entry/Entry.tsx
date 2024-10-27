import React from 'react';

import { Title } from '../Title/Title';
import { Menu } from '../Menu/Menu';
import { MenuItem } from '../MenuItem/MenuItem';
import { SidebarContext } from '../../model/constants/sidebarContext';
import { Sidebar, SidebarProps } from '../Sidebar/Sidebar';
import { Custom } from '../Custom/Custom';
import { Collapsible } from '../Collapsible/Collapsible';
import { ToggleButton } from '../ToggleButton/ToggleButton';

type Props = SidebarProps & {
  isOpen?: boolean;
};

export const Entry = (props: Props) => {
  const { isOpen = true, ...sidebarProps } = props;

  const memoizedContextValue = React.useMemo(
    () => ({
      isOpen
    }),
    [isOpen]
  );

  return (
    <SidebarContext.Provider value={memoizedContextValue}>
      <Sidebar {...sidebarProps} />
    </SidebarContext.Provider>
  );
};

Entry.Title = Title;

Entry.Menu = Menu;

Entry.MenuItem = MenuItem;

Entry.Custom = Custom;

Entry.Collapsible = Collapsible;

Entry.ToggleButton = ToggleButton;
