import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { ITime } from 'types';
import countdownTime from 'utils/countdownTime';
import { PomodoroContext, PomodoroMode } from '.';

let countdownTimeout: NodeJS.Timeout;

const PomodoroContextProvider: React.FC = ({ children }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [initialCount, setInitialCount] = useState({
    hours: 0,
    minutes: 25,
    seconds: 0,
  });
  const [count, setCount] = useState(initialCount);
  const [cyclesToLongBreak, setCyclesToLongBreak] = useState(5);
  const [cycles, setCycles] = useState(0);
  const [mode, setMode] = useState(PomodoroMode.work);

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const newTimer = useCallback((newCount: ITime) => {
    setCount(newCount);
    setInitialCount(newCount);
  }, []);

  const changeToNextMode = useCallback(() => {
    const newCycle = cycles + 1;
    let newMode = PomodoroMode.work;
    const newCount = { hours: 0, minutes: 25, seconds: 0 };

    if (mode === PomodoroMode.work) {
      newMode = PomodoroMode.break;
      newCount.minutes = 5;
      if (newCycle % cyclesToLongBreak === 0) {
        newMode = PomodoroMode.longBreak;
        newCount.minutes = 15;
      }
    }

    setIsRunning(false);
    setMode(newMode);
    setCycles(newCycle);
    newTimer(newCount);
    clearTimeout(countdownTimeout);
  }, [cycles, cyclesToLongBreak, mode, newTimer]);

  useEffect(() => {
    if (!isRunning) {
      clearTimeout(countdownTimeout);
      return;
    }

    if (count.hours + count.minutes + count.seconds === 0) {
      changeToNextMode();
      return;
    }

    countdownTimeout = setTimeout(() => {
      setCount(countdownTime(count));
    }, 1000);
  }, [isRunning, count, changeToNextMode]);

  const pomodoro = useMemo(
    () => ({
      isRunning,
      startTimer,
      pauseTimer,
      newTimer,
      cycles,
      cyclesToLongBreak,
      mode,
      count,
      initialCount,
    }),
    [
      isRunning,
      startTimer,
      pauseTimer,
      count,
      cyclesToLongBreak,
      cycles,
      mode,
      newTimer,
      initialCount,
    ],
  );

  return (
    <PomodoroContext.Provider value={pomodoro}>
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroContextProvider;
