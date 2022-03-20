import { IPomodoroMode } from './usePomodoro.types';

interface IPomodoroModeObject {
  [key: string]: IPomodoroMode;
}

const PomodoroMode: IPomodoroModeObject = {
  focus: 'focus',
  break: 'break',
  longBreak: 'longBreak',
};

export default PomodoroMode;
