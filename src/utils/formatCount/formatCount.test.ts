import formatCount from '.';

describe('formatCount', () => {
  it('should be able to format minutes and seconds into padded string', () => {
    let count = {
      hours: 0,
      minutes: 25,
      seconds: 0,
    };

    count = formatCount(count);

    const expected = {
      hours: '0',
      minutes: '25',
      seconds: '00',
    };

    expect(count.minutes).toBe(expected.minutes);
    expect(count.seconds).toBe(expected.seconds);
  });
  it('should not pad hours', () => {
    let count = {
      hours: 1,
      minutes: 0,
      seconds: 0,
    };

    count = formatCount(count);

    expect(count.hours).toBe('1');
  });
});
