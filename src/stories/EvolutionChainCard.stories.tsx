import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import EvolutionChainCard from '../components/pokemonDetailsCard/evolutionChainCard/evolutionChainCard';

export default {
  title: 'Components/EvolutionChainCard',
  component: EvolutionChainCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The EvolutionChainCard component displays the evolutionary chain of a Pokémon, showcasing its types and images. It provides a visual representation of how a Pokémon evolves, making it easier for users to understand the evolution process.',
      },
    },
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'Data object containing Pokémon evolution details, including id, name, types, and sprites.',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
  },
} as Meta;

const Template: StoryFn<{ data: any }> = (args) => <EvolutionChainCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    id: 1,
    name: 'charmender',
    types: [{ type: { name: 'fire' } }],
    sprites: {
      other: {
        dream_world: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
        },
      },
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
  },
};
