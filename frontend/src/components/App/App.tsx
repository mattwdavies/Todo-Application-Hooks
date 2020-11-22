import React from 'react';
import './App.css';
import ToDo from '../Todo/Todo';
import { ThemeProvider } from 'theme-ui';
import theme from '../../theme/index';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <ToDo />
      </div>
    </ThemeProvider>
  );
};

export default App;
