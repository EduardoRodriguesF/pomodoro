import { createContext, useContext } from 'react';
import { IPomodoroConfigContextProps } from './usePomodoroConfig.types';

const DEFAULT_VALUE = {
  timer: {
    focus: {
      hours: 0,
      minutes: 25,
      seconds: 0,
    },
    break: {
      hours: 0,
      minutes: 5,
      seconds: 0,
    },
    longBreak: {
      hours: 0,
      minutes: 15,
      seconds: 0,
    },
  },
};

const PomodoroConfigContext = createContext<IPomodoroConfigContextProps>(
  DEFAULT_VALUE as unknown as IPomodoroConfigContextProps,
);
const usePomodoroConfig = () => useContext(PomodoroConfigContext);

export { PomodoroConfigContext };
export default usePomodoroConfig;
