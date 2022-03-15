import { createContext, useContext } from 'react';
import { ISettingsContextProps } from './useSettings.types';

const DEFAULT_VALUE = {
  preset: {
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
    pauseAfterCycle: false,
    longBreakInterval: 5,
  },
};

const SettingsContext = createContext<ISettingsContextProps>(
  DEFAULT_VALUE as ISettingsContextProps,
);
const useSettings = () => useContext(SettingsContext);

export { SettingsContext };
export default useSettings;