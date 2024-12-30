import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ColorfulTag from '../components/pokemonDetailsCard/colorfulTags/colorfulTag';

export default {
  title: 'Components/ColorfulTag',
  component: ColorfulTag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The ColorfulTag component is used to display a tag with a specific color and text, often used to indicate categories or types, such as Pokémon types. It supports customization through props for text, className, and type.',
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to display inside the tag.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Grass' },
      },
    },
    className: {
      control: 'text',
      description: 'CSS class for styling the tag.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'tag-class' },
      },
    },
    type: {
      control: 'text',
      description: 'Type of the tag, used for styling based on type.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'grass' },
      },
    },
  },
} as Meta;

const Template: StoryFn<{ text: string; className: string; type: string }> = (args) => <ColorfulTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Grass',
  className: 'tag-class',
  type: 'grass',
};
