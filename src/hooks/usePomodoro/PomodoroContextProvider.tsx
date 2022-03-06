import React, {
  useState, useMemo, useCallback, useEffect,
} from 'react';
import countdownTime from 'utils/countdownTime';
import { PomodoroContext, PomodoroMode } from '.';

let countdownTimeout: NodeJS.Timeout;

const PomodoroContextProvider: React.FC = ({ children }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState({ hours: 0, minutes: 25, seconds: 0 });
  const [cycles, setCycles] = useState(0);
  const [mode, setMode] = useState(PomodoroMode.work);

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const changeToNextMode = useCallback(() => {
    const newCycle = cycles + 1;
    let newMode = PomodoroMode.work;
    const newCount = { hours: 0, minutes: 25, seconds: 0 };

    if (mode === PomodoroMode.work) {
      newMode = PomodoroMode.break;
      newCount.minutes = 5;
      if (newCycle % 7 === 0) {
        newMode = PomodoroMode.longBreak;
        newCount.minutes = 15;
      }
    }

    setIsRunning(false);
    setMode(newMode);
    setCycles(newCycle);
    setCount(newCount);
    clearTimeout(countdownTimeout);
  }, [cycles, mode]);

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

  const pomodoro = useMemo(() => ({
    isRunning,
    startTimer,
    pauseTimer,
    cycles,
    mode,
    count,
    setCount,
  }), [isRunning, startTimer, pauseTimer, count, cycles, mode]);

  return (
    <PomodoroContext.Provider value={pomodoro}>
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroContextProvider;
