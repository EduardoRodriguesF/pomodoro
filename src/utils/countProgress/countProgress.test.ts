import countProgress from '.';

const initialCount = {
  hours: 0,
  minutes: 25,
  seconds: 0,
};

describe('countProgress', () => {
  it('should be able to return percentage', () => {
    const currentCount = { hours: 0, minutes: 14, seconds: 0 };

    const progress = countProgress(initialCount, currentCount);

    expect(progress).toBe(56);
  });
  it('should return 0% at start', () => {
    const progress = countProgress(initialCount, initialCount);

    expect(progress).toBe(0);
  });
  it('should return 100% at end', () => {
    const currentCount = { hours: 0, minutes: 0, seconds: 0 };

    const progress = countProgress(initialCount, currentCount);

    expect(progress).toBe(100);
  });
  it('should be able to return decimals', () => {
    const currentCount = { hours: 0, minutes: 14, seconds: 2 };

    const progress = countProgress(initialCount, currentCount);

    expect(progress).toBe(56.13);
  });
});
