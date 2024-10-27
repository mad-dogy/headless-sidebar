import { useState } from 'react';

import { Sidebar } from '../../headless-sidebar/src';

import HomeIcon from './shared/assets/homeOutline.svg';
import ProfileIcon from './shared/assets/profile.svg';
import BookmarkIcon from './shared/assets/bookmark.svg';
import SettingsIcon from './shared/assets/settings.svg';
import { Separator } from './shared/ui/Separator/Separator';

import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Sidebar
        className="min-w-min max-w-sm h-full p-8 flex flex-col gap-8 bg-gray-100"
        closedClassName="min-w-min max-w-min h-full p-8 flex flex-col gap-8 bg-gray-100"
        isOpen={sidebarOpen}
      >
        <Sidebar.Title
          title="Title"
          closedTitle="Te"
          className="text-3xl font-bold"
          closedClassName="text-3xl font-bold text-center"
        />
        <Sidebar.Menu className="p-0 m-0">
          <Sidebar.MenuItem
            icon={<HomeIcon width={24} height={24} />}
            label="Home"
            RootComponent={
              <span className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"></span>
            }
            labelClassName="text-xl"
          />

          <Sidebar.MenuItem
            icon={<ProfileIcon width={24} height={24} />}
            label="Profile"
            className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
            labelClassName="text-xl"
          />
          <Separator />

          <Sidebar.Collapsible
            icon={<BookmarkIcon width={24} height={24} />}
            label="Bookmark collapsible"
            headerClassName="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
            labelClassName="text-xl"
            innerClassName="ml-8"
          >
            <Sidebar.MenuItem
              label="Favourite sweets"
              className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
              labelClassName="text-xl"
            />
            <Sidebar.MenuItem
              label="Fav dolls"
              className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
              labelClassName="text-xl"
            />
            <Sidebar.MenuItem
              label="Fav girls"
              className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
              labelClassName="text-xl"
            />
          </Sidebar.Collapsible>

          <Separator />

          <Sidebar.MenuItem
            icon={<SettingsIcon width={24} height={24} />}
            label="Settings"
            className="p-2 flex gap-4 items-center rounded-xl cursor-pointer hover:bg-gray-200"
            labelClassName="text-xl"
          />
        </Sidebar.Menu>

        <Sidebar.ToggleButton
          className="p-2 hover:bg-gray-200 max-w-min rounded-xl"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
      </Sidebar>
    </>
  );
}

export default App;
