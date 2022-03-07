import { ITime } from 'types';

type IPomodoroMode = 'work' | 'break' | 'longBreak';

interface IPomodoroContextProps {
  isRunning: boolean,
  startTimer: () => void,
  pauseTimer: () => void,
  newTimer: (newCount: ITime) => void;
  mode: IPomodoroMode;
  cycles: number;
  count: ITime;
  initialCount: ITime;
}

export type { IPomodoroContextProps, IPomodoroMode, ITime };
