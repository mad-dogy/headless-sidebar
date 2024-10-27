import { useState } from 'react';

import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';

import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex gap-8 h-full">
      <Sidebar isOpen={sidebarOpen} setOpen={setSidebarOpen} />

      <AppRouter />
    </div>
  );
}

export default App;
