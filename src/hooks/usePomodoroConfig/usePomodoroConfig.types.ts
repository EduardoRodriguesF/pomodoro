import { ITime } from 'types';

interface ITimerSet {
  focus: ITime;
  break: ITime;
  longBreak: ITime;
}

interface IConfig {
  timer: ITimerSet;
  pauseAfterCycle: boolean;
  longBreakInterval: number;
}

interface IPomodoroConfigContextProps {
  config: IConfig;
  setWorkTime: (time: ITime) => void;
  setBreakTime: (time: ITime) => void;
  setLongBreakTime: (time: ITime) => void;
  setLongBreakInterval: (interval: number) => void;
  toggleAutoCycle: () => void;
}

export type { ITimerSet, IConfig, IPomodoroConfigContextProps };
