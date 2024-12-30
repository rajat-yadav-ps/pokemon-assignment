import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Header from '../components/header/header';

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Header is a simple header component that accepts children as props.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Content inside the header',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: '<h1>Header</h1>' },
      },
    },
  },
} as Meta;

const Template: StoryFn<{ children: React.ReactNode }> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <h1>Header</h1>,
};
