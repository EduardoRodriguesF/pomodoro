type IPomodoroMode = 'work' | 'break' | 'longBreak';

interface IPomodoroContextProps {
  isRunning: boolean,
  startTimer: () => void,
  pauseTimer: () => void,
  mode: IPomodoroMode;
  cycles: number;
  count: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export type { IPomodoroContextProps, IPomodoroMode };
