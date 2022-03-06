import React from 'react';
import { render } from '@testing-library/react';
import { PomodoroContextProvider, usePomodoro } from 'hooks/usePomodoro';
import { renderHook, RenderResult } from '@testing-library/react-hooks';
import { IPomodoroContextProps } from 'hooks/usePomodoro/usePomodoro.types';
import PomodoroTimer from '.';

interface IWrapperProps {
  children: React.ReactNode;
}

describe('PomodoroTimer component', () => {
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
  it('should be able to render minutes', () => {
    const { getByTestId } = render(<PomodoroTimer />);

    const element = getByTestId('minutes');

    expect(element).toHaveTextContent(pomodoro.current.count.minutes.toString().padStart(2, '0'));
  });
  it('should be able to render seconds', () => {
    const { getByTestId } = render(<PomodoroTimer />);

    const element = getByTestId('seconds');

    expect(element).toHaveTextContent(pomodoro.current.count.seconds.toString().padStart(2, '0'));
  });
  it('should not render hours when timer is less than 1 hour', () => {
    const { getByTestId } = render(<PomodoroTimer />);

    const element = getByTestId('hours');

    expect(element).toBeNull();
  });
  it('should render hours when timer is past 1 hour', () => {
    const { getByTestId } = render(<PomodoroTimer />);
    pomodoro.current.setCount({ hours: 1, minutes: 25, seconds: 0 });

    const element = getByTestId('hours');

    expect(element).toHaveTextContent(pomodoro.current.count.hours.toString());
  });
});
