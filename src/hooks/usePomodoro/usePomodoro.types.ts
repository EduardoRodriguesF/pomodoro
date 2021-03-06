import { ITime } from 'types';

type IPomodoroMode = 'focus' | 'break' | 'longBreak';

interface IPomodoroModesObject {
  [key: string]: IPomodoroMode;
}

interface IPomodoroContextProps {
  isRunning: boolean;
  startTimer: () => void;
  pauseTimer: () => void;
  newTimer: (newCount: ITime) => void;
  mode: IPomodoroMode;
  cycles: number;
  breaksPassed: number;
  count: ITime;
  initialCount: ITime;
}

export type { IPomodoroContextProps, IPomodoroMode, IPomodoroModesObject };
