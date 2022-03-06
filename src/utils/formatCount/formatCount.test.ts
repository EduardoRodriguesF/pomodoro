import formatCount from '.';

describe('formatCount', () => {
  it('should be able to format minutes and seconds into padded string', () => {
    const count = {
      hours: 0,
      minutes: 25,
      seconds: 0,
    };

    const expected = {
      hours: '0',
      minutes: '25',
      seconds: '00',
    };

    expect(formatCount(count).minutes).toBe(expected.minutes);
    expect(formatCount(count).seconds).toBe(expected.seconds);
  });
  it('should not pad hours', () => {
    const count = {
      hours: 1,
      minutes: 0,
      seconds: 0,
    };

    expect(formatCount(count).hours).toBe('1');
  });
});
