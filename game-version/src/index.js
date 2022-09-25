import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GameContextProvider } from './contexts/GameContextProvider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GameLogicContextProvider } from './contexts/GameLogicContextProvider';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b3db59',
    },
    secondary: {
      main: '#b3db59',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GameLogicContextProvider>
      <GameContextProvider>
        <App />
      </GameContextProvider>
      </GameLogicContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
