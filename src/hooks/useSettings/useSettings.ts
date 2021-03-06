import { createContext, useContext } from 'react';
import { ISettingsContextProps } from './useSettings.types';

const DEFAULT_VALUE = {
  focusTime: {
    hours: 0,
    minutes: 25,
    seconds: 0,
  },
  breakTime: {
    hours: 0,
    minutes: 5,
    seconds: 0,
  },
  longBreakTime: {
    hours: 0,
    minutes: 15,
    seconds: 0,
  },
  pauseAfterCycle: true,
  longBreakInterval: 5,
};

const SettingsContext = createContext<ISettingsContextProps>(
  DEFAULT_VALUE as ISettingsContextProps,
);
const useSettings = () => useContext(SettingsContext);

export { SettingsContext };
export default useSettings;
