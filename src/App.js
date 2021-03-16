import './App.less';

import ACom from './components/ACom/ACom';
import { themes } from './var/themes';
import { ThemeContext } from './context/themes';

import React, { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('light')
  const value = { theme, setTheme, themes }

  return (
    <ThemeContext.Provider value={value}>
      <div className="App">
        <header className="App-header">
          <ACom></ACom>
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
