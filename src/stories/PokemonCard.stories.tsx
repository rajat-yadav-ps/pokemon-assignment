import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PokemonCard from '../components/pokemonCard/pokemonCard';

export default {
  title: 'Components/PokemonCard',
  component: PokemonCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays a card with detailed information about a pokemon.',
      },
    },
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'An object containing pokemon data such as name, id, types, and images.',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback function for handling clicks on the pokemon card.',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: '() => {}' },
      },
    },
    className: {
      control: 'text',
      description: 'CSS class for applying custom styles to the card.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'pokemon-card' },
      },
    },
  },
} as Meta

const Template: StoryFn<{ data: any; onClick: () => void; className: string }> = (args) => <PokemonCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    name: 'pidgey',
    id: 16,
    types: [{ type: { name: 'flying' } }],
    sprites: {
      other: {
        dream_world: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg',
        },
      },
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
    },
  },
  onClick: () => alert('Pokemon clicked!'),
  className: 'pokemon-card',
};