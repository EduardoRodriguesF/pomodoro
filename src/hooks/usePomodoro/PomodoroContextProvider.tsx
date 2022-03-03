import React, {
  useState, useMemo, useCallback, useEffect,
} from 'react';
import countdownTime from 'utils/countdownTime';
import { PomodoroContext } from '.';
import { IPomodoroMode } from './usePomodoro.types';

const PomodoroContextProvider: React.FC = ({ children }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState({ hours: 0, minutes: 25, seconds: 0 });

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const countdown = useCallback(() => {
    if (!isRunning) return;

    setCount(countdownTime(count));
    setTimeout(countdown, 1000);
  }, [count, isRunning]);

  useEffect(() => {
    if (!isRunning) return;

    setTimeout(countdown, 1000);
  }, [isRunning, countdown]);

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
