import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import StatCard from '../components/pokemonDetailsCard/statCard/statCard';

export default {
  title: 'Components/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This component displays a list of pokemon stats',
      },
    },
  },
  argTypes: {
    stats: {
      control: 'object',
      description: 'Array of stats to display in the card.',
      table: {
        type: { summary: 'object[]' },
        defaultValue: { summary: '[]' },
      },
    },
  },
} as Meta;

const Template: StoryFn<{ stats: any[] }> = (args) => <StatCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  stats: [
    { stat: { name: 'hp' }, base_stat: 100 },
    { stat: { name: 'attack' }, base_stat: 80 },
    { stat: { name: 'defense' }, base_stat: 70 },
    { stat: { name: 'special-attack' }, base_stat: 95 },
    { stat: { name: 'special-defense' }, base_stat: 85 },
    { stat: { name: 'speed' }, base_stat: 80 },
  ],
};
