import React from 'react';
import Dashboard from 'pages/Dashboard';
import { PomodoroContextProvider } from 'hooks/usePomodoro';
import GlobalStyle from 'styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <PomodoroContextProvider>
      <Dashboard />
    </PomodoroContextProvider>
  </>
);

export default App;
