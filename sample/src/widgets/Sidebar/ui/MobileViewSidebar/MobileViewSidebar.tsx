import { NavLink, useLocation } from 'react-router-dom';
import { Sidebar as HeadlessSidebar } from 'headless-sidebar';

import { Icon } from '@/shared/ui/Icon';
import { Separator } from '@/shared/ui/Separator/Separator/Separator';
import HomeIcon from '@/shared/assets/homeOutline.svg';
import ProfileIcon from '@/shared/assets/profile.svg';
import InventoryIcon from '@/shared/assets/inventory.svg';
import SettingsIcon from '@/shared/assets/settings.svg';
import CommentIcon from '@/shared/assets/comment.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { routes } from '@/shared/constants/router';

import { SidebarProps } from '../Sidebar/Sidebar';

type Props = SidebarProps;

export const MobileViewSidebar = (props: Props) => {
  const { className } = props;

  const location = useLocation();

  return (
    <HeadlessSidebar
      className={classNames('w-full fixed bottom-0 right-0 left-0 p-4 flex bg-gray-100', {}, [
        className
      ])}
    >
      <HeadlessSidebar.Menu className="w-full flex gap-2 items-center justify-between">
        <HeadlessSidebar.MenuItem
          icon={<Icon Svg={HomeIcon} />}
          label="Home"
          classNames={{
            container: 'p-2 flex flex-col gap-2 items-center rounded-xl hover:bg-gray-200',
            activeContainer: 'bg-blue-100 hover:bg-blue-200',
            label: 'text-l'
          }}
          RootComponent={<NavLink to={routes.home()} />}
          active={location.pathname === routes.home()}
        />

        <HeadlessSidebar.MenuItem
          icon={<Icon Svg={ProfileIcon} />}
          label="Profile"
          RootComponent={<NavLink to={routes.profile()} />}
          classNames={{
            container: 'p-2 flex flex-col gap-2 items-center rounded-xl hover:bg-gray-200',
            activeContainer: 'bg-blue-100 hover:bg-blue-200',
            label: 'text-l'
          }}
          active={location.pathname === routes.profile()}
        />
        <Separator direction="vertical" />

        <HeadlessSidebar.Collapsible
          icon={<Icon Svg={InventoryIcon} />}
          label="Inventory"
          classNames={{
            container: 'flex flex-col',
            header:
              'p-2 flex flex-col gap-2 items-center justify-center rounded-xl hover:bg-gray-200',
            label: 'text-l',
            inner: 'ml-8 mr-8 flex flex-col gap-2',
            activeHeader: 'bg-blue-100 hover:bg-blue-200'
          }}
          active={
            location.pathname === routes.products() ||
            location.pathname === routes.orders() ||
            location.pathname === routes.supplies()
          }
        >
          <HeadlessSidebar.MenuItem
            label="Products"
            RootComponent={<NavLink to={routes.products()} />}
            classNames={{
              container: 'p-2 flex flex-col gap-2 items-center rounded-xl hover:bg-gray-200',
              activeContainer: 'bg-blue-100 hover:bg-blue-200',
              label: 'text-l'
            }}
            active={location.pathname === routes.products()}
          />
          <HeadlessSidebar.MenuItem
            label="Orders"
            RootComponent={<NavLink to={routes.orders()} />}
            classNames={{
              container: 'p-2 flex flex-col gap-2 items-center rounded-xl hover:bg-gray-200',
              activeContainer: 'bg-blue-100 hover:bg-blue-200',
              label: 'text-l'
            }}
            active={location.pathname === routes.orders()}
          />
          <HeadlessSidebar.MenuItem
            label="Supplies"
            RootComponent={<NavLink to={routes.supplies()} />}
            classNames={{
              container: 'p-2 flex flex-col gap-2 items-center rounded-xl hover:bg-gray-200',
              activeContainer: 'bg-blue-100 hover:bg-blue-200',
              label: 'text-l'
            }}
            active={location.pathname === routes.supplies()}
          />
        </HeadlessSidebar.Collapsible>

        <Separator direction="vertical" />

        <HeadlessSidebar.MenuItem
          icon={<Icon Svg={SettingsIcon} />}
          label="Settings"
          RootComponent={<NavLink to={routes.settings()} />}
          classNames={{
            container: 'p-2 flex flex-col gap-2 items-center rounded-xl hover:bg-gray-200',
            activeContainer: 'bg-blue-100 hover:bg-blue-200',
            label: 'text-l'
          }}
          active={location.pathname === routes.settings()}
        />

        <HeadlessSidebar.MenuItem
          icon={<Icon Svg={CommentIcon} />}
          label="Say hi"
          classNames={{
            container: 'p-2 flex flex-col gap-2 items-center rounded-xl hover:bg-gray-200',
            activeContainer: 'bg-blue-100 hover:bg-blue-200',
            label: 'text-l'
          }}
          onClick={() => {
            alert('hi');
          }}
        />
      </HeadlessSidebar.Menu>
    </HeadlessSidebar>
  );
};
