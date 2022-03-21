import { ComponentMeta } from '@storybook/react';
import { PomodoroContextProvider } from 'hooks/usePomodoro';
import React from 'react';
import PomodoroButton from './PomodoroButton';

export default {
  title: 'PomodoroButton',
  component: PomodoroButton,
  decorators: [
    Story => (
      <PomodoroContextProvider>
        <Story />
      </PomodoroContextProvider>
    ),
  ],
} as ComponentMeta<typeof PomodoroButton>;

export const Default = () => <PomodoroButton />;
