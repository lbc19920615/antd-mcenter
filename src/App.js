import './App.less';

import ACom from './components/ACom/ACom';
import { themes } from './var/themes';
import { ThemeContext } from './context/themes';

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <div className="App">
        <header className="App-header">
          <ACom></ACom>
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
