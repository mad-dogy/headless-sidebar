import { Sidebar } from 'headless-sidebar';

import HomeIcon from './shared/assets/homeOutline.svg';
import ProfileIcon from './shared/assets/profile.svg';
import BookmarkIcon from './shared/assets/bookmark.svg';
import SettingsIcon from './shared/assets/settings.svg';

import './App.css';

function App() {
  return (
    <>
      <Sidebar className="sidebar">
        <Sidebar.Title title="Title" />
        <Sidebar.Menu>
          <Sidebar.MenuItem
            icon={<HomeIcon 
              // @ts-ignore
              width={24} height={24} />}
            label="Home"
            RootComponent={<span></span>}
            className='aaa'
          />
          
          <Sidebar.MenuItem 
          // @ts-ignore
          icon={<ProfileIcon width={24} height={24} />} label="Profile" />
          <Sidebar.MenuSeparator />

          <Sidebar.Collapsible
          // @ts-ignore
            icon={<BookmarkIcon width={24} height={24} />}
            label="Bookmark collapsible"
          >
            <Sidebar.MenuItem label="Favourite sweets" />
            <Sidebar.MenuItem label="Fav dolls" />
            <Sidebar.MenuItem label="Fav girls" />
          </Sidebar.Collapsible>

          <Sidebar.MenuSeparator />

          <Sidebar.MenuItem icon={<SettingsIcon 
          // @ts-ignore
          width={24} height={24} />} label="Settings" />
        </Sidebar.Menu>

        <Sidebar.ToggleButton />
      </Sidebar>
    </>
  );
}

export default App;
