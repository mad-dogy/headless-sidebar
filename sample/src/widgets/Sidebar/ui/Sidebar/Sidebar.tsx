import { BrowserView, MobileView } from 'react-device-detect';
import { BrowserViewSidebar } from '../BrowserViewSidebar/BrowserViewSidebar';
import { MobileViewSidebar } from '../MobileViewSidebar/MobileViewSidebar';

export type SidebarProps = {
  className?: string;
  isOpen: boolean;
  setOpen: (value: boolean) => void;
};

export const Sidebar = (props: SidebarProps) => {

  return (
    <>
    <BrowserView>
      <BrowserViewSidebar {...props} />
    </BrowserView>

    <MobileView>
      <MobileViewSidebar {...props} />
    </MobileView>
    </>
  );
};
