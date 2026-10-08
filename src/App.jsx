import { useContext } from 'react';
import ThemeContext from './stores/ThemeContext';

export default function App() {
  const { theme } = useContext(ThemeContext);
  console.log('APP: ', theme);
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  );
}

function Main() {
  const { theme } = useContext(ThemeContext);

  return <h1>Current Theme: {theme}</h1>;
}
