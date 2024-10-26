import { createContext } from 'react';

import { SidebarContext as SidebarContextType } from '../types/sidebarContext';

export const SidebarContext = createContext<SidebarContextType | null>(null);
