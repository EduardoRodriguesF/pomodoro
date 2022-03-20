import React from 'react';
import { ComponentMeta } from '@storybook/react';
import ProgressRing from '.';

export default {
  title: 'ProgressRing',
  component: ProgressRing,
  decorators: [
    Story => (
      <div
        style={{
          position: 'relative',
          aspectRatio: '1/1',
          width: '300px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ProgressRing>;

export const Default = {
  args: {
    progress: 50,
  },
};
