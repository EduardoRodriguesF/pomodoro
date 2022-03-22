import { ComponentMeta } from '@storybook/react';
import Button from 'components/Button';
import { PomodoroContextProvider } from 'hooks/usePomodoro';
import React from 'react';
import PomodoroButton from './PomodoroButton';

export default {
  title: 'PomodoroButton',
  component: PomodoroButton,
  subcomponents: { Button },
  decorators: [
    Story => (
      <PomodoroContextProvider>
        <Story />
      </PomodoroContextProvider>
    ),
  ],
} as ComponentMeta<typeof PomodoroButton>;

export const Default = () => <PomodoroButton />;
