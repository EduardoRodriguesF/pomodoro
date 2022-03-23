import { createContext, useContext } from 'react';
import { IPomodoroContextProps } from './usePomodoro.types';

const POMODORO_MODE = {
  WORK: 'work',
  BREAK: 'break',
  LONG_BREAK: 'longBreak',
};

const DEFAULT_VALUE = {
  isRunning: false,
  mode: POMODORO_MODE.WORK,
  cycles: 0,
  breaksPassed: 0,
  count: {
    hours: 0,
    minutes: 25,
    seconds: 0,
  },
  initialCount: {
    hours: 0,
    minutes: 25,
    seconds: 0,
  },
};

const PomodoroContext = createContext<IPomodoroContextProps>(
  DEFAULT_VALUE as IPomodoroContextProps,
);
const usePomodoro = () => useContext(PomodoroContext);

export { PomodoroContext };
export default usePomodoro;
