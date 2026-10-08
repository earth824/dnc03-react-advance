import { useState } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}
