import React, { useState } from 'react';
import Calculator from './Calculator';
import HistoryMemory from './HistoryMemory';

function App() {
  const [view, setView] = useState('calculator'); // 'calculator', 'history'

  const toggleMenu = () => {
    setView((prevView) => (prevView === 'calculator' ? 'history' : 'calculator'));
  };

  return (
    <div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </button>
      {view === 'calculator' ? <Calculator /> : <HistoryMemory />}
    </div>
  );
}

export default App;
