import { createContext, useContext } from 'react';
import { ISettingsContextProps } from './useSettings.types';

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

const SettingsContext = createContext<ISettingsContextProps>(
  DEFAULT_VALUE as unknown as ISettingsContextProps,
);
const useSettings = () => useContext(SettingsContext);

export { SettingsContext };
export default useSettings;
