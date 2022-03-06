import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import PomodoroButton from '.';

describe('PomodoroButton component', () => {
  it('should be able to start timer', () => {
    const { baseElement, queryByTestId } = render(<PomodoroButton />);

    expect(queryByTestId('play-icon')).not.toBeNull();

    act(() => {
      fireEvent.click(baseElement);
    });

    expect(queryByTestId('pause-icon')).not.toBeNull();
  });
  it('should be able to pause timer', () => {
    const { baseElement, queryByTestId } = render(<PomodoroButton />);

    expect(queryByTestId('play-icon')).not.toBeNull();

    act(() => {
      fireEvent.click(baseElement);
    });

    expect(queryByTestId('pause-icon')).not.toBeNull();

    act(() => {
      fireEvent.click(baseElement);
    });

    expect(queryByTestId('play-icon')).not.toBeNull();
  });
});
