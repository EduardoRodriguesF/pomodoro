import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FiPlay } from 'react-icons/fi';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'text'],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Button',
  children: 'Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Button',
  children: 'Button',
  variant: 'secondary',
};

export const Text = Template.bind({});
Text.args = {
  title: 'Button',
  children: 'Button',
  variant: 'text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Button',
  children: 'Button',
  variant: 'primary',
  disabled: true,
};

export const Round = Template.bind({});
Round.args = {
  title: 'Button',
  children: <FiPlay size={24} />,
  round: true,
};
