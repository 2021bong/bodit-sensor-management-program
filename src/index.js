import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import * as Theme from './styles/Theme';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>,
);
