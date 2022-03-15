import React, { useCallback, useMemo, useState } from 'react';
import { SettingsContext } from '.';
import { IPreset } from './useSettings.types';

const DEFAULT_VALUE = {
  preset: {
    timer: {
      focus: {
        hours: 0,
        minutes: 25,
        seconds: 0,
      },
      break: {
        hours: 0,
        minutes: 5,
        seconds: 0,
      },
      longBreak: {
        hours: 0,
        minutes: 15,
        seconds: 0,
      },
    },
    pauseAfterCycle: false,
    longBreakInterval: 5,
  },
};

const SettingsContextProvider: React.FC = ({ children }) => {
  const [preset, setPreset] = useState(DEFAULT_VALUE.preset as IPreset);

  const setFocusTime = useCallback(
    time => {
      const newPreset = preset;

      newPreset.timer.focus = time;

      setPreset(newPreset);
    },
    [preset],
  );

  const setBreakTime = useCallback(
    time => {
      const newPreset = preset;

      newPreset.timer.break = time;

      setPreset(newPreset);
    },
    [preset],
  );

  const setLongBreakTime = useCallback(
    time => {
      const newPreset = preset;

      newPreset.timer.longBreak = time;

      setPreset(newPreset);
    },
    [preset],
  );

  const setLongBreakInterval = useCallback(
    interval => {
      const newPreset = preset;

      newPreset.longBreakInterval = interval * 2 + 1;

      setPreset(newPreset);
    },
    [preset],
  );

  const togglePauseAfterCycle = useCallback(() => {
    const newPreset = preset;

    newPreset.pauseAfterCycle = !newPreset.pauseAfterCycle;

    setPreset(newPreset);
  }, [preset]);

  const settings = useMemo(
    () => ({
      preset,
      setFocusTime,
      setBreakTime,
      setLongBreakTime,
      setLongBreakInterval,
      togglePauseAfterCycle,
    }),
    [
      preset,
      setFocusTime,
      setBreakTime,
      setLongBreakTime,
      setLongBreakInterval,
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
