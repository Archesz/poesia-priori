import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';
import { useDarkMode } from './hooks/useDarkMode';
import Home from './pages/Home';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

