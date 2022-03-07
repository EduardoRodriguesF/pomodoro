import { ITime } from 'types';
import countdownTime from './countdownTime';

describe('countdownTime', () => {
  let time: ITime;
  beforeEach(() => {
    time = {
      hours: 5,
      minutes: 30,
      seconds: 15,
    };
  });
  it('should be able to count down seconds', () => {
    time = countdownTime(time);
    expect(time.seconds).toBe(14);
  });
  it('should be able to count down past a minute break', () => {
    time.seconds = 0;
    time = countdownTime(time);
    expect(time).toMatchObject({ hours: 5, minutes: 29, seconds: 59 });
  });
  it('should be able to count down past an hour break', () => {
    time.minutes = 0;
    time.seconds = 0;
    time = countdownTime(time);
    expect(time).toMatchObject({ hours: 4, minutes: 59, seconds: 59 });
  });
  it('shouldn\'t count to negatives', () => {
    const allZeroes = { hours: 0, minutes: 0, seconds: 0 };

    time = allZeroes;
    time = countdownTime(time);
    expect(time).toMatchObject(allZeroes);
  });
});
