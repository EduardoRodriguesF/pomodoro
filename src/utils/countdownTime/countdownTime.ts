import { ITime } from 'types/ITime';

function countdownTime(time: ITime) {
  let { hours, minutes, seconds } = time;

  if (hours + minutes + seconds === 0) return time;

  seconds -= 1;
  if (seconds < 0) {
    seconds = 59;
    minutes -= 1;

    if (minutes < 0 && hours > 0) {
      minutes = 59;
      hours -= 1;
    }
  }

  return {
    hours,
    minutes,
    seconds,
  };
}

export default countdownTime;
