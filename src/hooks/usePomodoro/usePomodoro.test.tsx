import React from 'react';
import { renderHook, act, RenderResult } from '@testing-library/react-hooks';
import { usePomodoro, PomodoroContextProvider } from '.';
import { IPomodoroContextProps } from './usePomodoro.types';

interface IWrapperProps {
  children: React.ReactNode;
}

describe('usePomodoro', () => {
  let pomodoro: RenderResult<IPomodoroContextProps>;

  const passTimeBySeconds = (seconds: number) => {
    for (let i = 0; i < seconds; i += 1) {
      act(() => {
        jest.advanceTimersByTime(1000);
      });
    }
  };

  const passTimeByMinutes = (minutes: number) => {
    passTimeBySeconds(minutes * 60);
  };

  const passTimeUntilEnd = () => {
    passTimeByMinutes(pomodoro.current.count.minutes);
    passTimeBySeconds(pomodoro.current.count.seconds);
  };

  const passTimeByCycles = (cycles: number) => {
    for (let i = 0; i < cycles; i += 1) {
      act(pomodoro.current.startTimer);
      passTimeUntilEnd();
    }
  };

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
    act(() => {
      pomodoro.current.startTimer();
    });

    passTimeBySeconds(3);

    expect(pomodoro.current.count).toMatchObject({ hours: 0, minutes: 24, seconds: 57 });
  });
  it('should be able to go to next mode', () => {
    act(() => {
      pomodoro.current.startTimer();
    });

    passTimeUntilEnd();

    expect(pomodoro.current.count).toMatchObject({ hours: 0, minutes: 5, seconds: 0 });
    expect(pomodoro.current.isRunning).toBeFalsy();
    expect(pomodoro.current.mode).toBe('break');
  });
  it('should be able to do a long break', () => {
    passTimeByCycles(4);

    expect(pomodoro.current.count).toMatchObject({ hours: 0, minutes: 15, seconds: 0 });
    expect(pomodoro.current.isRunning).toBeFalsy();
    expect(pomodoro.current.cycles).toBe(4);
    expect(pomodoro.current.mode).toBe('longBreak');
  });
});
