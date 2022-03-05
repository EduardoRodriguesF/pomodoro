import React from 'react';
import Dashboard from 'pages/Dashboard';
import { PomodoroContextProvider } from 'hooks/usePomodoro';

const App: React.FC = () => (
  <PomodoroContextProvider>
    <Dashboard />
  </PomodoroContextProvider>
);

export default App;
