import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ITime } from 'types';
import getStoredSetting from 'utils/getStoredSetting';
import { SettingsContext } from '.';

const DEFAULT_VALUE = {
  focusTime: getStoredSetting('focusTime') as ITime,
  breakTime: getStoredSetting('breakTime') as ITime,
  longBreakTime: getStoredSetting('longBreakTime') as ITime,
  pauseAfterCycle: getStoredSetting('pauseAfterCycle') as boolean,
  longBreakInterval: getStoredSetting('longBreakInterval') as number,
};

const SettingsContextProvider: React.FC = ({ children }) => {
  const [focusTime, setFocusTime] = useState(DEFAULT_VALUE.focusTime);
  const [breakTime, setBreakTime] = useState(DEFAULT_VALUE.breakTime);
  const [longBreakTime, setLongBreakTime] = useState(
    DEFAULT_VALUE.longBreakTime,
  );
  const [longBreakInterval, setLongBreakInterval] = useState(
    DEFAULT_VALUE.longBreakInterval,
  );
  const [pauseAfterCycle, setPauseAfterCycle] = useState(
    DEFAULT_VALUE.pauseAfterCycle,
  );

  const togglePauseAfterCycle = useCallback(() => {
    setPauseAfterCycle(!pauseAfterCycle);
  }, [pauseAfterCycle]);

  useEffect(() => {
    localStorage.setItem(
      'focusTime@Pomodoro.Settings',
      JSON.stringify(focusTime),
    );
    localStorage.setItem(
      'breakTime@Pomodoro.Settings',
      JSON.stringify(breakTime),
    );
    localStorage.setItem(
      'longBreakTime@Pomodoro.Settings',
      JSON.stringify(longBreakTime),
    );
    localStorage.setItem(
      'pauseAfterCycle@Pomodoro.Settings',
      JSON.stringify(pauseAfterCycle),
    );
    localStorage.setItem(
      'longBreakInterval@Pomodoro.Settings',
      JSON.stringify(longBreakInterval),
    );
  }, [focusTime, breakTime, longBreakTime, longBreakInterval, pauseAfterCycle]);

  const settings = useMemo(
    () => ({
      focusTime,
      breakTime,
      longBreakTime,
      longBreakInterval,
      pauseAfterCycle,
      setFocusTime,
      setBreakTime,
      setLongBreakTime,
      setLongBreakInterval,
      togglePauseAfterCycle,
    }),
    [
      focusTime,
      breakTime,
      longBreakTime,
      longBreakInterval,
      pauseAfterCycle,
      togglePauseAfterCycle,
    ],
  );

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
