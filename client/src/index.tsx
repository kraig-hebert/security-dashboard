import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'react-jss';

import App from './App';
import { theme } from './themes/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
