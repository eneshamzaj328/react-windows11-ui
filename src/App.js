import React, { useState, useEffect } from 'react';

import Desktop from './components/Desktop';
import TaskBar from './components/Taskbar/Taskbar';

const allowedWindowsSize = () => {
  const { innerWidth, innerHeight } = window;
  switch (true) {
    case innerWidth <= 900:
    case innerHeight <= 700:
      return false;
    case innerWidth > 900:
    case innerHeight > 700:
      return true;
    default: return;
  }
};

function App() {
  const [isLimited, setIsLimited] = useState(!allowedWindowsSize());

  useEffect(() => {
    const onResizeHandler = () => {
      if (!allowedWindowsSize()) {
        setIsLimited(true);

        return;
      }

      setIsLimited(false);

      return;
    };

    window.addEventListener('resize', onResizeHandler);

    return () => {
      window.removeEventListener('resize', onResizeHandler);
    };

  }, []);

  //version 1.0

  if (isLimited) {
    const msgStyles = { margin: "3rem auto", fontSize: '1.2rem', textAlign: 'center' }
    return <p style={msgStyles}>Windows 11 it's not Available for small Devices.</p>
  }

  return (
    <main>
      <Desktop />
      <TaskBar />
    </main>
  );
}

export default App;
