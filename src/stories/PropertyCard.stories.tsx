import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PropertyCard from '../components/pokemonDetailsCard/propertyCard/propertyCard';

export default {
  title: 'Components/PropertyCard',
  component: PropertyCard,
  parameters: {
    docs: {
      description: {
        component: 'PropertyCard presents comprehensive details about a Pokémon, covering its species, abilities, and type relationships.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    speciesData: {
      control: 'object',
      description: 'Information about the Pokémon’s species, such as egg groups.',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
    data: {
      control: 'object',
      description: 'Basic Pokémon attributes, including height, weight, abilities, and types.',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
    pokemonTypeData: {
      control: 'object',
      description: 'Type-specific data, including damage relationships with other types.',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
  },
} as Meta;

const Template: StoryFn<{ speciesData: any; data: any; pokemonTypeData: any }> = (args) => <PropertyCard {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
  speciesData: {
    egg_groups: [{ name: 'monster' }, { name: 'dragon' }],
  },
  data: {
    height: 10,
    weight: 200,
    abilities: [
      { ability: { name: 'overgrow' } },
      { ability: { name: 'chlorophyll' } },
    ],
    types: [
      { type: { name: 'grass' } },
      { type: { name: 'poison' } },
    ],
  },
  pokemonTypeData: {
    damage_relations: {
      double_damage_from: [
        { name: 'fire' },
        { name: 'ice' },
      ],
    },
  },
};
