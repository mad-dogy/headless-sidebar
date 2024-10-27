import { NavLink, useLocation } from 'react-router-dom';
import { useCallback } from 'react';

import { Icon } from '@/shared/ui/Icon';
import { Separator } from '@/shared/ui/Separator/Separator';
import HomeIcon from '@/shared/assets/homeOutline.svg';
import ProfileIcon from '@/shared/assets/profile.svg';
import InventoryIcon from '@/shared/assets/inventory.svg';
import SettingsIcon from '@/shared/assets/settings.svg';
import CommentIcon from '@/shared/assets/comment.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { routes } from '@/shared/constants/router';

import { Sidebar as HeadlessSidebar } from '../../../../../headless-sidebar/src';

type Props = {
  className?: string;
  isOpen: boolean;
  setOpen: (value: boolean) => void;
};

export const Sidebar = (props: Props) => {
  const { className, isOpen, setOpen } = props;

  const toggleOpen = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen, setOpen]);

  const location = useLocation();

  return (
    <HeadlessSidebar
      className={classNames(
        'min-w-min max-w-xs w-full h-full p-8 flex flex-col gap-8 bg-gray-100',
        {},
        [className]
      )}
      closedClassName="min-w-min max-w-min h-full p-8 flex flex-col gap-8 bg-gray-100"
      isOpen={isOpen}
    >
      <HeadlessSidebar.Title
        title="Title"
        closedTitle="Te"
        className="text-3xl font-bold"
        closedClassName="text-3xl font-bold text-center"
      />
      <HeadlessSidebar.Menu className="p-0 m-0">
        <HeadlessSidebar.MenuItem
          icon={<Icon Svg={HomeIcon} />}
          label="Home"
          labelClassName="text-xl"
          RootComponent={<NavLink to={routes.home()} />}
          className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
          activeClassName="bg-blue-100 hover:bg-blue-200"
          active={location.pathname === routes.home()}
        />

        <HeadlessSidebar.MenuItem
          icon={<Icon Svg={ProfileIcon} />}
          label="Profile"
          labelClassName="text-xl"
          RootComponent={<NavLink to={routes.profile()} />}
          className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
          activeClassName="bg-blue-100 hover:bg-blue-200"
          active={location.pathname === routes.profile()}
        />
        <Separator />

        <HeadlessSidebar.Collapsible
          icon={<Icon Svg={InventoryIcon} />}
          label="Inventory"
          headerClassName="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
          labelClassName="text-xl"
          innerClassName="ml-8"
          dropdownMenuClassName="w-max p-2 bg-gray-50 rounded-xl flex flex-col gap-2"
          activeClassName="bg-blue-100 hover:bg-blue-200"
          active={
            location.pathname === routes.products() ||
            location.pathname === routes.orders() ||
            location.pathname === routes.supplies()
          }
        >
          <HeadlessSidebar.MenuItem
            label="Products"
            labelClassName="text-xl"
            RootComponent={<NavLink to={routes.products()} />}
            className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
            activeClassName="bg-blue-100 hover:bg-blue-200"
            active={location.pathname === routes.products()}
          />
          <HeadlessSidebar.MenuItem
            label="Orders"
            labelClassName="text-xl"
            RootComponent={<NavLink to={routes.orders()} />}
            className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
            activeClassName="bg-blue-100 hover:bg-blue-200"
            active={location.pathname === routes.orders()}
          />
          <HeadlessSidebar.MenuItem
            label="Supplies"
            labelClassName="text-xl"
            RootComponent={<NavLink to={routes.supplies()} />}
            className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
            activeClassName="bg-blue-100 hover:bg-blue-200"
            active={location.pathname === routes.supplies()}
          />
        </HeadlessSidebar.Collapsible>

        <Separator />

        <HeadlessSidebar.MenuItem
          icon={<Icon Svg={SettingsIcon} />}
          label="Settings"
          labelClassName="text-xl"
          RootComponent={<NavLink to={routes.settings()} />}
          className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
          activeClassName="bg-blue-100 hover:bg-blue-200"
          active={location.pathname === routes.settings()}
        />

        <HeadlessSidebar.MenuItem
          icon={<Icon Svg={CommentIcon} />}
          label="Say hi"
          labelClassName="text-xl"
          className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
          activeClassName="bg-blue-100 hover:bg-blue-200"
          onClick={() => {
            alert('hi');
          }}
        />
      </HeadlessSidebar.Menu>

      <HeadlessSidebar.ToggleButton
        className="p-2 hover:bg-gray-200 max-w-min rounded-xl"
        onClick={toggleOpen}
      />
    </HeadlessSidebar>
  );
};
