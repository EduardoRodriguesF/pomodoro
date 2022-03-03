import { renderHook, act } from '@testing-library/react-hooks';
import { usePomodoro } from '.';
import { IPomodoroContextProps } from './usePomodoro.types';

describe('usePomodoro', () => {
  let pomodoro: IPomodoroContextProps;
  beforeEach(() => {
    jest.useFakeTimers();
    const { result } = renderHook(() => usePomodoro());
    pomodoro = result.current;
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it('should be able to start timer', () => {
    expect(pomodoro.isRunning).toBeFalsy();
    act(() => pomodoro.startTimer());
    expect(pomodoro.isRunning).toBeTruthy();
  });
  it('should be able to pause timer', () => {
    pomodoro.isRunning = true;
    act(() => pomodoro.pauseTimer());
    expect(pomodoro.isRunning).toBeFalsy();
  });
  it('should be able to count down', () => {
    pomodoro.count = { hours: 0, minutes: 25, seconds: 0 };

    act(() => {
      pomodoro.startTimer();
      jest.advanceTimersByTime(1000);
    });

    expect(pomodoro.count).toMatchObject({ hours: 0, minutes: 24, seconds: 59 });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(pomodoro.count).toMatchObject({ hours: 0, minutes: 24, seconds: 58 });
  });
  it('should be able to go to next mode', () => {
    pomodoro.count = { hours: 0, minutes: 0, seconds: 1 };

    act(() => {
      pomodoro.startTimer();
      jest.advanceTimersByTime(1000);
    });

    expect(pomodoro.mode).toBe('break');
    expect(pomodoro.count).toMatchObject({ hours: 0, minutes: 5, seconds: 0 });
    expect(pomodoro.isRunning).toBeFalsy();
  });
  it('should be able to do a long break', () => {
    pomodoro.count = { hours: 0, minutes: 0, seconds: 1 };
    pomodoro.cycles = 3;

    act(() => {
      pomodoro.startTimer();
      jest.advanceTimersByTime(1000);
    });

    expect(pomodoro.cycles).toBe(4);
    expect(pomodoro.mode).toBe('longBreak');
    expect(pomodoro.count).toMatchObject({ hours: 0, minutes: 15, seconds: 0 });
    expect(pomodoro.isRunning).toBeFalsy();
  });
});
