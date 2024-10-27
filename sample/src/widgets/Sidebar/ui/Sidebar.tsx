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
        title="Headless sidebar"
        closedTitle="HS"
        classNames={{
          opened: 'text-3xl font-bold',
          closed: 'text-3xl font-bold text-center'
        }}
      />
      <HeadlessSidebar.Menu className="p-0 m-0 flex gap-2 flex-col">
        <HeadlessSidebar.MenuItem
          icon={<Icon Svg={HomeIcon} />}
          label="Home"
          classNames={{
            container: 'p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200',
            activeContainer: 'bg-blue-100 hover:bg-blue-200',
            label: 'text-xl'
          }}
          RootComponent={<NavLink to={routes.home()} />}
          active={location.pathname === routes.home()}
        />

        <HeadlessSidebar.MenuItem
          icon={<Icon Svg={ProfileIcon} />}
          label="Profile"
          RootComponent={<NavLink to={routes.profile()} />}
          classNames={{
            container: 'p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200',
            activeContainer: 'bg-blue-100 hover:bg-blue-200',
            label: 'text-xl'
          }}
          active={location.pathname === routes.profile()}
        />
        <Separator />

        <HeadlessSidebar.Collapsible
          icon={<Icon Svg={InventoryIcon} />}
          label="Inventory"
          classNames={{
            container: 'flex flex-col gap-2',
            header: 'p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200',
            label: 'text-xl',
            inner: 'ml-8 flex flex-col gap-2',
            dropdown: 'w-max p-2 bg-gray-50 rounded-xl flex flex-col gap-2',
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
              container: 'p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200',
              activeContainer: 'bg-blue-100 hover:bg-blue-200',
              label: 'text-xl'
            }}
            active={location.pathname === routes.products()}
          />
          <HeadlessSidebar.MenuItem
            label="Orders"
            RootComponent={<NavLink to={routes.orders()} />}
            classNames={{
              container: 'p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200',
              activeContainer: 'bg-blue-100 hover:bg-blue-200',
              label: 'text-xl'
            }}
            active={location.pathname === routes.orders()}
          />
          <HeadlessSidebar.MenuItem
            label="Supplies"
            RootComponent={<NavLink to={routes.supplies()} />}
            classNames={{
              container: 'p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200',
              activeContainer: 'bg-blue-100 hover:bg-blue-200',
              label: 'text-xl'
            }}
            active={location.pathname === routes.supplies()}
          />
        </HeadlessSidebar.Collapsible>

        <Separator />

        <HeadlessSidebar.MenuItem
          icon={<Icon Svg={SettingsIcon} />}
          label="Settings"
          RootComponent={<NavLink to={routes.settings()} />}
          classNames={{
            container: 'p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200',
            activeContainer: 'bg-blue-100 hover:bg-blue-200',
            label: 'text-xl'
          }}
          active={location.pathname === routes.settings()}
        />

        <HeadlessSidebar.MenuItem
          icon={<Icon Svg={CommentIcon} />}
          label="Say hi"
          classNames={{
            container: 'p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200',
            activeContainer: 'bg-blue-100 hover:bg-blue-200',
            label: 'text-xl'
          }}
          onClick={() => {
            alert('hi');
          }}
        />
      </HeadlessSidebar.Menu>

      <HeadlessSidebar.ToggleButton
        className="p-2 hover:bg-gray-200 max-w-min rounded-xl"
        onClick={toggleOpen}
      />

      {isOpen ? (
        <HeadlessSidebar.Custom className="p-2 bg-gray-200  w-full rounded-xl">
          <div>
            <h5 className="text-red-400 font-medium text-lg">Custom element</h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius dapibus lorem non
              blandit. Nullam finibus quam lacus.
            </p>
          </div>
        </HeadlessSidebar.Custom>
      ) : null}
    </HeadlessSidebar>
  );
};
