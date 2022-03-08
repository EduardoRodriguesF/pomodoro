import React from 'react';
import { PomodoroContextProvider } from 'hooks/usePomodoro';
import { render } from '@testing-library/react';
import PomodoroRing from '.';

describe('PomodoroRing component', () => {
  it('should be able to render progress ring', () => {
    const { getByTestId } = render(
      <PomodoroContextProvider>
        <PomodoroRing />
      </PomodoroContextProvider>,
    );

    const element = getByTestId('progress');

    expect(element).not.toBeNull();
  });
});
