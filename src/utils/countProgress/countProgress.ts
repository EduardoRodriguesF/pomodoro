import { ITime } from 'types';

function countProgress(initial: ITime, current: ITime): number {
  let initialSeconds = 0;
  let currentSeconds = 0;

  initialSeconds += initial.hours * 60 * 60;
  initialSeconds += initial.minutes * 60;
  initialSeconds += initial.seconds;

  currentSeconds += current.hours * 60 * 60;
  currentSeconds += current.minutes * 60;
  currentSeconds += current.seconds;

  const progress = Math.round(Math.abs((currentSeconds / initialSeconds) - 1) * 10000) / 100;

  return progress;
}

export default countProgress;
