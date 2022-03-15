import React from 'react';
import Dashboard from 'pages/Dashboard';
import { PomodoroContextProvider } from 'hooks/usePomodoro';
import GlobalStyle from 'styles/global';
import { SettingsContextProvider } from 'hooks/useSettings';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <SettingsContextProvider>
      <PomodoroContextProvider>
        <Dashboard />
      </PomodoroContextProvider>
    </SettingsContextProvider>
  </>
);

export default App;
