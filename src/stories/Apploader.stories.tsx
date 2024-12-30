import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Apploader from '../components/loader/loader';

export default {
  title: 'Components/Apploader',
  component: Apploader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Apploader is a customizable loading spinner that accepts a className for styling.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'CSS class for styling the loader.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default-loader' },
      },
    },
  },
} as Meta;

const Template: StoryFn<{ className: string }> = (args) => <Apploader {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'default-loader',
};
