import { Link } from 'react-router-dom';
import { Sidebar as HeadlessSidebar } from 'headless-sidebar';

import { Icon } from '@/shared/ui/Icon';
import { Separator } from '@/shared/ui/Separator/Separator';
import HomeIcon from '@/shared/assets/homeOutline.svg';
import ProfileIcon from '@/shared/assets/profile.svg';
import BookmarkIcon from '@/shared/assets/bookmark.svg';
import SettingsIcon from '@/shared/assets/settings.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { routes } from '@/shared/constants/router';

type Props = {
  className?: string;
  isOpen: boolean;
  setOpen: (value: boolean) => void;
};

export const Sidebar = (props: Props) => {
  const { className, isOpen, setOpen } = props;

  return (
    <HeadlessSidebar
      className={classNames('min-w-min max-w-sm h-full p-8 flex flex-col gap-8 bg-gray-100', {}, [
        className
      ])}
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
          RootComponent={
            <Link
              to={routes.home()}
              className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
            ></Link>
          }
          labelClassName="text-xl"
        />

        <HeadlessSidebar.MenuItem
          icon={<Icon Svg={ProfileIcon} />}
          label="Profile"
          labelClassName="text-xl"
          RootComponent={
            <Link
              to={routes.profile()}
              className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
            ></Link>
          }
        />
        <Separator />

        <HeadlessSidebar.Collapsible
          icon={<Icon Svg={BookmarkIcon} />}
          label="Bookmark collapsible"
          headerClassName="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
          labelClassName="text-xl"
          innerClassName="ml-8"
          dropdownMenuClassName="w-max p-2 bg-gray-50 rounded-xl flex flex-col gap-2"
        >
          <HeadlessSidebar.MenuItem
            label="Favourite sweets"
            labelClassName="text-xl"
            isInsideCollapbible
            RootComponent={
              <Link
                to={routes.bookmark()}
                className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
              ></Link>
            }
          />
          <HeadlessSidebar.MenuItem
            label="Fav dolls"
            labelClassName="text-xl"
            isInsideCollapbible
            RootComponent={
              <Link
                to={routes.bookmark()}
                className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
              ></Link>
            }
          />
          <HeadlessSidebar.MenuItem
            label="Fav girls"
            labelClassName="text-xl"
            isInsideCollapbible
            RootComponent={
              <Link
                to={routes.bookmark()}
                className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
              ></Link>
            }
          />
        </HeadlessSidebar.Collapsible>

        <Separator />

        <HeadlessSidebar.MenuItem
          icon={<Icon Svg={SettingsIcon} />}
          label="Settings"
          labelClassName="text-xl"
          RootComponent={
            <Link
              to={routes.settings()}
              className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
            ></Link>
          }
        />
      </HeadlessSidebar.Menu>

      <HeadlessSidebar.ToggleButton
        className="p-2 hover:bg-gray-200 max-w-min rounded-xl"
        onClick={() => setOpen(!isOpen)}
      />
    </HeadlessSidebar>
  );
};
