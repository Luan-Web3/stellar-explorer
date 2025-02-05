import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme, GlobalStyle } from './styles';
import Home from './pages/Home';
import Block from './pages/Block';
import Transaction from './pages/Transaction';
import DarkModeSwitch from './components/DarkModeSwitch';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const handleDarkModeChange = (event) => {
    setIsDarkMode(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle theme={theme} />
        <DarkModeSwitch onChange={handleDarkModeChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/block/:id" element={<Block />} />
          <Route path="/transaction/:id" element={<Transaction />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;