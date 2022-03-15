import { act, renderHook } from '@testing-library/react-hooks';
import { RenderResult } from '@testing-library/react-hooks/lib/types';
import React from 'react';
import useSettings, { SettingsContextProvider } from '.';
import { ISettingsContextProps } from './useSettings.types';

interface IWrapperProps {
  children: React.ReactNode;
}

describe('useSettings', () => {
  let settings: RenderResult<ISettingsContextProps>;

  beforeEach(() => {
    const wrapper = ({ children }: IWrapperProps) => (
      <SettingsContextProvider>{children}</SettingsContextProvider>
    );
    const { result } = renderHook(() => useSettings(), { wrapper });
    settings = result;
  });

  it('should be able to set focus time', () => {
    const newFocusTime = {
      hours: 1,
      minutes: 0,
      seconds: 0,
    };

    act(() => settings.current.setFocusTime(newFocusTime));

    expect(settings.current.preset.timer.focus).toBe(newFocusTime);
  });
  it('should be able to set break time', () => {
    const newBreakTime = {
      hours: 1,
      minutes: 0,
      seconds: 0,
    };

    act(() => settings.current.setBreakTime(newBreakTime));

    expect(settings.current.preset.timer.break).toBe(newBreakTime);
  });
  it('should be able to set long break time', () => {
    const newLongBreakTime = {
      hours: 1,
      minutes: 0,
      seconds: 0,
    };

    act(() => settings.current.setLongBreakTime(newLongBreakTime));

    expect(settings.current.preset.timer.longBreak).toBe(newLongBreakTime);
  });
  it('should be able to toggle auto cycles', () => {
    act(() => settings.current.togglePauseAfterCycle());
    expect(settings.current.preset.pauseAfterCycle).toBeTruthy();
    act(() => settings.current.togglePauseAfterCycle());
    expect(settings.current.preset.pauseAfterCycle).toBeFalsy();
  });
  it('should be able to set long break by cycles', () => {
    act(() => settings.current.setLongBreakInterval(1));
    expect(settings.current.preset.longBreakInterval).toBe(3);

    act(() => settings.current.setLongBreakInterval(2));
    expect(settings.current.preset.longBreakInterval).toBe(5);

    act(() => settings.current.setLongBreakInterval(3));
    expect(settings.current.preset.longBreakInterval).toBe(7);

    act(() => settings.current.setLongBreakInterval(4));
    expect(settings.current.preset.longBreakInterval).toBe(9);
  });
});
