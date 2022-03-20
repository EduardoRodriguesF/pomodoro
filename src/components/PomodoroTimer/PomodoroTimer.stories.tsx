import React, { useEffect } from 'react';
import { ComponentMeta } from '@storybook/react';
import { PomodoroContextProvider, usePomodoro } from 'hooks/usePomodoro';
import PomodoroTimer from '.';

export default {
  title: 'PomodoroTimer',
  component: PomodoroTimer,
  decorators: [
    Story => (
      <PomodoroContextProvider>
        <Story />
      </PomodoroContextProvider>
    ),
  ],
} as ComponentMeta<typeof PomodoroTimer>;

export const Paused = () => <PomodoroTimer />;
export const Running = () => {
  const { startTimer } = usePomodoro();

  useEffect(() => {
    startTimer();
  }, [startTimer]);

  return <PomodoroTimer />;
};
