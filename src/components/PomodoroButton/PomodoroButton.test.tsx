import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { PomodoroContextProvider } from 'hooks/usePomodoro';
import PomodoroButton from '.';

describe('PomodoroButton component', () => {
  it('should render pause icon when timer is started', () => {
    const { getByRole, queryByTestId } = render(
      <PomodoroContextProvider>
        <PomodoroButton />
      </PomodoroContextProvider>,
    );

    const button = getByRole('button');

    expect(queryByTestId('play-icon')).not.toBeNull();

    fireEvent.click(button);

    expect(queryByTestId('pause-icon')).not.toBeNull();
  });
  it('should render play icon when timer is paused', () => {
    const { getByRole, queryByTestId } = render(
      <PomodoroContextProvider>
        <PomodoroButton />
      </PomodoroContextProvider>,
    );

    const button = getByRole('button');

    expect(queryByTestId('play-icon')).not.toBeNull();

    fireEvent.click(button);

    expect(queryByTestId('pause-icon')).not.toBeNull();

    fireEvent.click(button);

    expect(queryByTestId('play-icon')).not.toBeNull();
  });
});
