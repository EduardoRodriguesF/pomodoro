import React, { useCallback, useMemo, useState } from 'react';
import { SettingsContext } from '.';

const DEFAULT_VALUE = {
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
  pauseAfterCycle: true,
  longBreakInterval: 5,
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
