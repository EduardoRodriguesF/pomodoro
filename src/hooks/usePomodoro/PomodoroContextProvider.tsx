import React, { useState, useMemo } from 'react';
import { PomodoroContext } from '.';

const PomodoroContextProvider: React.FC = ({ children }) => {
  const [isRunning, setIsRunning] = useState(false);

  const pomodoro = useMemo(() => ({
    isRunning,
  }), [isRunning]);

  return (
    <PomodoroContext.Provider value={pomodoro}>
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroContextProvider;
