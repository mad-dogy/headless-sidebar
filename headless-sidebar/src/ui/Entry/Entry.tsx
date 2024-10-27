import React from 'react';

import { Title } from '../Title/Title';
import { Menu } from '../Menu/Menu';
import { MenuItem } from '../MenuItem/MenuItem';
import { SidebarContext } from '../../model/constants/sidebarContext';
import { Sidebar, SidebarProps } from '../Sidebar/Sidebar';
import { Custom } from '../Custom/Custom';
import { Collapsible } from '../Collapsible/Collapsible';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import { SidebarContext as SidebarContextType } from '../../model/types/sidebarContext';

type Props = SidebarProps & {
  isOpen?: boolean;
  onItemChange?: (id?: string) => void;
};

export const Entry = (props: Props) => {
  const { isOpen = true, onItemChange, ...sidebarProps } = props;

  const memoizedContextValue = React.useMemo<SidebarContextType>(
    () => ({
      isOpen,
      onItemChange
    }),
    [onItemChange, isOpen]
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
