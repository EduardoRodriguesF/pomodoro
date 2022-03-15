import useSettings from 'hooks/useSettings';
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { ITime } from 'types';
import countdownTime from 'utils/countdownTime';
import { PomodoroContext, PomodoroMode } from '.';

let countdownTimeout: NodeJS.Timeout;

const PomodoroContextProvider: React.FC = ({ children }) => {
  const { preset } = useSettings();

  const [isRunning, setIsRunning] = useState(false);
  const [initialCount, setInitialCount] = useState(preset.timer.focus);
  const [count, setCount] = useState(initialCount);
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
    let newCount = preset.timer.focus;

    if (mode === PomodoroMode.work) {
      newMode = PomodoroMode.break;
      newCount = preset.timer.break;
      if (newCycle % preset.longBreakInterval === 0) {
        newMode = PomodoroMode.longBreak;
        newCount = preset.timer.longBreak;
      }
    }

    if (preset.pauseAfterCycle) setIsRunning(false);
    setMode(newMode);
    setCycles(newCycle);
    newTimer(newCount);
    clearTimeout(countdownTimeout);
  }, [cycles, preset, mode, newTimer]);

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
