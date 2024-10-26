import { Sidebar } from '../../headless-sidebar/src';

import './App.css';

function App() {
  return (
    <>
      <Sidebar className="sidebar">
        <Sidebar.Title title="Title" />
        <Sidebar.Menu>
          <Sidebar.MenuItem icon={'aa'} label="asd" />
          <Sidebar.MenuItem icon={'bb'} label="dsa" />
        </Sidebar.Menu>
      </Sidebar>
    </>
  );
}

export default App;
