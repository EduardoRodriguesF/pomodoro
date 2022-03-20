import getStoredSetting from '.';

const mockedStoredSettings = {
  focusTime: {
    hours: 0,
    minutes: 35,
    seconds: 0,
  },
  breakTime: {
    hours: 0,
    minutes: 3,
    seconds: 0,
  },
  longBreakTime: {
    hours: 0,
    minutes: 20,
    seconds: 0,
  },
  longBreakInterval: 7,
  pauseAfterCycle: false,
};

const defaultStoredSettings = {
  focusTime: {
    hours: 0,
    minutes: 25,
    seconds: 0,
  },
  breakTime: {
    hours: 0,
    minutes: 5,
    seconds: 0,
  },
  longBreakTime: {
    hours: 0,
    minutes: 15,
    seconds: 0,
  },
  longBreakInterval: 5,
  pauseAfterCycle: true,
};

describe('getStoredSetting', () => {
  beforeEach(() => {
    localStorage.setItem(
      'focusTime@Pomodoro.Settings',
      JSON.stringify(mockedStoredSettings.focusTime),
    );
    localStorage.setItem(
      'breakTime@Pomodoro.Settings',
      JSON.stringify(mockedStoredSettings.breakTime),
    );
    localStorage.setItem(
      'longBreakTime@Pomodoro.Settings',
      JSON.stringify(mockedStoredSettings.longBreakTime),
    );
    localStorage.setItem(
      'longBreakInterval@Pomodoro.Settings',
      JSON.stringify(mockedStoredSettings.longBreakInterval),
    );
    localStorage.setItem(
      'pauseAfterCycle@Pomodoro.Settings',
      JSON.stringify(mockedStoredSettings.pauseAfterCycle),
    );
  });
  afterEach(() => {
    localStorage.clear();
  });
  it('should be able retrieve stored time', () => {
    const storedFocusTime = getStoredSetting('focusTime');
    const storedBreakTime = getStoredSetting('breakTime');
    const storedLongBreakTime = getStoredSetting('longBreakTime');

    expect(storedFocusTime).toMatchObject(mockedStoredSettings.focusTime);
    expect(storedBreakTime).toMatchObject(mockedStoredSettings.breakTime);
    expect(storedLongBreakTime).toMatchObject(
      mockedStoredSettings.longBreakTime,
    );
  });
  it('should return a default time if no storage is found', () => {
    localStorage.clear();

    const storedFocusTime = getStoredSetting('focusTime');
    const storedBreakTime = getStoredSetting('breakTime');
    const storedLongBreakTime = getStoredSetting('longBreakTime');

    expect(storedFocusTime).toMatchObject(defaultStoredSettings.focusTime);
    expect(storedBreakTime).toMatchObject(defaultStoredSettings.breakTime);
    expect(storedLongBreakTime).toMatchObject(
      defaultStoredSettings.longBreakTime,
    );
  });
  it('should be able to retrieve long break interval number', () => {
    const storedLongBreakInterval = getStoredSetting('longBreakInterval');

    expect(storedLongBreakInterval).toBe(
      mockedStoredSettings.longBreakInterval,
    );
  });
  it('should return a default long break interval if no storage is found', () => {
    localStorage.clear();

    const storedLongBreakInterval = getStoredSetting('longBreakInterval');

    expect(storedLongBreakInterval).toBe(
      defaultStoredSettings.longBreakInterval,
    );
  });
  it('should be able to retrieve pause after cycle boolean', () => {
    const storedPauseAfterCycle = getStoredSetting('pauseAfterCycle');

    expect(storedPauseAfterCycle).toBe(mockedStoredSettings.pauseAfterCycle);
  });
  it('should return a default pause after cycle boolean if no storage is found', () => {
    localStorage.clear();

    const storedPauseAfterCycle = getStoredSetting('pauseAfterCycle');

    expect(storedPauseAfterCycle).toBe(defaultStoredSettings.pauseAfterCycle);
  });
});
