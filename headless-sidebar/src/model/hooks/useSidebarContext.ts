import { useContext } from 'react';

import { SidebarContext } from '../constants/sidebarContext';

export function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('This component must be used within a <Sidebar> component.');
  }

  return context;
}
