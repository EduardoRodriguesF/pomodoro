import { ITime } from 'types';

function formatCount(count: ITime) {
  return {
    hours: count.hours.toString(),
    minutes: count.minutes.toString().padStart(2, '0'),
    seconds: count.seconds.toString().padStart(2, '0'),
  };
}

export default formatCount;
