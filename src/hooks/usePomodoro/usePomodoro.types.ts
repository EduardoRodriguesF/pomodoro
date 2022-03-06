import React from 'react';

type IPomodoroMode = 'work' | 'break' | 'longBreak';

interface ITime {
  hours: number;
  minutes: number;
  seconds: number;
}

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
  setCount: React.Dispatch<React.SetStateAction<ITime>>
}

export type { IPomodoroContextProps, IPomodoroMode };
