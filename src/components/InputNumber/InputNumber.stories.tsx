import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from 'components/Button';
import InputNumber from './InputNumber';

export default {
  title: 'InputNumber',
  component: InputNumber,
  subcomponents: { Button },
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = args => (
  <InputNumber {...args} />
);

export const Default = Template.bind({});
