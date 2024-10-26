import { Sidebar } from '../../headless-sidebar/src/index';

import './App.css';

function App() {
  return (
    <>
      <Sidebar className="sidebar">
        <Sidebar.Title title="Title" />
        <Sidebar.Menu>
          <Sidebar.MenuItem icon={'aa'} label="asd" RootComponent={<span></span>} />
          <Sidebar.MenuItem icon={'bb'} label="dsa" />
          <Sidebar.MenuSeparator />
          <Sidebar.MenuItem icon={'bb'} label="dsa" />
        </Sidebar.Menu>
      </Sidebar>
    </>
  );
}

export default App;
