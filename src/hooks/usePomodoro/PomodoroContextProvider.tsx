import useSettings from 'hooks/useSettings';
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { ITime } from 'types';
import countdownTime from 'utils/countdownTime';
import { PomodoroContext, PomodoroMode } from '.';

let countdownTimeout: NodeJS.Timeout;

const PomodoroContextProvider: React.FC = ({ children }) => {
  const {
    focusTime,
    breakTime,
    longBreakTime,
    longBreakInterval,
    pauseAfterCycle,
  } = useSettings();

  const [isRunning, setIsRunning] = useState(false);
  const [initialCount, setInitialCount] = useState(focusTime);
  const [count, setCount] = useState(initialCount);
  const [breaksPassed, setBreaksPassed] = useState(0);
  const [cycles, setCycles] = useState(0);
  const [mode, setMode] = useState(PomodoroMode.focus);

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
    let newMode = PomodoroMode.focus;
    let newCount = focusTime;

    if (mode === PomodoroMode.focus) {
      newMode = PomodoroMode.break;
      newCount = breakTime;
      if (breaksPassed > 0 && breaksPassed % (longBreakInterval - 1) === 0) {
        newMode = PomodoroMode.longBreak;
        newCount = longBreakTime;
      }
    } else {
      setBreaksPassed(breaksPassed + 1);
    }

    if (pauseAfterCycle) setIsRunning(false);
    setMode(newMode);
    setCycles(newCycle);
    newTimer(newCount);
    clearTimeout(countdownTimeout);
  }, [
    cycles,
    focusTime,
    mode,
    pauseAfterCycle,
    newTimer,
    breakTime,
    breaksPassed,
    longBreakInterval,
    longBreakTime,
  ]);

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
      breaksPassed,
      mode,
      count,
      initialCount,
    }),
    [
      isRunning,
      startTimer,
      pauseTimer,
      count,
      cycles,
      breaksPassed,
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
