import { Sidebar } from '../../headless-sidebar/src';

import './App.css';

function App() {
  return (
    <>
      <Sidebar className="sidebar">
        <Sidebar.Title title="Title" />
        <Sidebar.Menu>
          <Sidebar.MenuItem label="asd" />
          <Sidebar.MenuItem label="dsa" />
        </Sidebar.Menu>
      </Sidebar>
    </>
  );
}

export default App;
