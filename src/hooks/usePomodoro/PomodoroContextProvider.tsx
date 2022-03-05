import React, {
  useState, useMemo, useCallback, useEffect,
} from 'react';
import countdownTime from 'utils/countdownTime';
import { PomodoroContext } from '.';
import { IPomodoroMode } from './usePomodoro.types';

let countdownTimeout: NodeJS.Timeout;

const PomodoroContextProvider: React.FC = ({ children }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState({ hours: 0, minutes: 25, seconds: 0 });

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  useEffect(() => {
    if (!isRunning) {
      clearTimeout(countdownTimeout);
      return;
    }

    countdownTimeout = setTimeout(() => {
      setCount(countdownTime(count));
    }, 1000);
  }, [isRunning, count]);

  const pomodoro = useMemo(() => ({
    isRunning,
    startTimer,
    pauseTimer,
    cycles: 0,
    mode: 'work' as IPomodoroMode,
    count,
  }), [isRunning, startTimer, pauseTimer, count]);

  return (
    <PomodoroContext.Provider value={pomodoro}>
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroContextProvider;
