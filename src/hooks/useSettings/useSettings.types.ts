import { ITime } from 'types';

interface ITimerSet {
  focus: ITime;
  break: ITime;
  longBreak: ITime;
}

interface IPreset {
  timer: ITimerSet;
  pauseAfterCycle: boolean;
  longBreakInterval: number;
}

interface ISettingsContextProps {
  preset: IPreset;
  setFocusTime: (time: ITime) => void;
  setBreakTime: (time: ITime) => void;
  setLongBreakTime: (time: ITime) => void;
  setLongBreakInterval: (interval: number) => void;
  togglePauseAfterCycle: () => void;
}

export type { ITimerSet, IPreset, ISettingsContextProps };
