import { IPomodoroMode } from './usePomodoro.types';

interface IPomodoroModeObject {
  [key: string]: IPomodoroMode;
}

const PomodoroMode: IPomodoroModeObject = {
  work: 'work',
  break: 'break',
  longBreak: 'longBreak',
};

export default PomodoroMode;
