import React from 'react';
import { renderHook, act, RenderResult } from '@testing-library/react-hooks';
import { usePomodoro, PomodoroContextProvider } from '.';
import { IPomodoroContextProps } from './usePomodoro.types';

interface IWrapperProps {
  children: React.ReactNode;
}

describe('usePomodoro', () => {
  let pomodoro: RenderResult<IPomodoroContextProps>;
  beforeEach(() => {
    jest.useFakeTimers();

    const wrapper = ({ children }: IWrapperProps) => (
      <PomodoroContextProvider>{children}</PomodoroContextProvider>
    );
    const { result } = renderHook(() => usePomodoro(), { wrapper });
    pomodoro = result;
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it('should be able to start timer', () => {
    expect(pomodoro.current.isRunning).toBeFalsy();
    act(() => pomodoro.current.startTimer());
    act(() => pomodoro.current.startTimer());
    expect(pomodoro.current.isRunning).toBeTruthy();
  });
  it('should be able to pause timer', () => {
    act(() => {
      pomodoro.current.startTimer();
      pomodoro.current.pauseTimer();
    });
    expect(pomodoro.current.isRunning).toBeFalsy();
  });
  it('should be able to count down', () => {
    pomodoro.current.count = { hours: 0, minutes: 25, seconds: 2 };

    act(() => {
      pomodoro.current.startTimer();
      jest.advanceTimersByTime(1000);
    });

    expect(pomodoro.current.count).toMatchObject({ hours: 0, minutes: 24, seconds: 59 });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(pomodoro.current.count).toMatchObject({ hours: 0, minutes: 24, seconds: 58 });
  });
  it('should be able to go to next mode', () => {
    pomodoro.current.count = { hours: 0, minutes: 0, seconds: 1 };

    act(() => {
      pomodoro.current.startTimer();
      jest.advanceTimersByTime(1000);
    });

    expect(pomodoro.current.mode).toBe('break');
    expect(pomodoro.current.count).toMatchObject({ hours: 0, minutes: 5, seconds: 0 });
    expect(pomodoro.current.isRunning).toBeFalsy();
  });
  it('should be able to do a long break', () => {
    pomodoro.current.count = { hours: 0, minutes: 0, seconds: 1 };
    pomodoro.current.cycles = 3;

    act(() => {
      pomodoro.current.startTimer();
      jest.advanceTimersByTime(1000);
    });

    expect(pomodoro.current.cycles).toBe(4);
    expect(pomodoro.current.mode).toBe('longBreak');
    expect(pomodoro.current.count).toMatchObject({ hours: 0, minutes: 15, seconds: 0 });
    expect(pomodoro.current.isRunning).toBeFalsy();
  });
});
