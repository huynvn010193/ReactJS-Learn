import { useContext } from 'react';
import './App.css';
import Content from './Content';
import { ThemeContext } from './ThemeContext';

// 1. Create context
// 2. Provider
// 3. Consumer

function App() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ padding: 20 }} className='App'>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Content />
    </div>
  );
}

export default App;
