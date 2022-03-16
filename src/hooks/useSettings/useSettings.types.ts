import { ITime } from 'types';

interface ISettingsContextProps {
  focusTime: ITime;
  breakTime: ITime;
  longBreakTime: ITime;
  pauseAfterCycle: boolean;
  longBreakInterval: number;
  setFocusTime: (time: ITime) => void;
  setBreakTime: (time: ITime) => void;
  setLongBreakTime: (time: ITime) => void;
  setLongBreakInterval: (interval: number) => void;
  togglePauseAfterCycle: () => void;
}

export type { ISettingsContextProps };
