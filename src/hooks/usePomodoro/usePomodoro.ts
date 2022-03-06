import { createContext, useContext } from 'react';
import { IPomodoroContextProps, IPomodoroMode } from './usePomodoro.types';

const POMODORO_MODE = {
  WORK: 'work',
  BREAK: 'break',
  LONG_BREAK: 'longBreak',
};

const DEFAULT_VALUE = {
  isRunning: false,
  startTimer: () => {},
  pauseTimer: () => {},
  mode: POMODORO_MODE.WORK as IPomodoroMode,
  cycles: 0,
  count: {
    hours: 0,
    minutes: 25,
    seconds: 0,
  },
  setCount: () => {},
};

const PomodoroContext = createContext<IPomodoroContextProps>(DEFAULT_VALUE);
const usePomodoro = () => useContext(PomodoroContext);

export { PomodoroContext };
export default usePomodoro;
