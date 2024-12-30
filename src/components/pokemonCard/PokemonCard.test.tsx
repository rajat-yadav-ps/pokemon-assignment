import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonCard from './pokemonCard';

const mockData = {
  name: 'Charmender',
  id: 4,
  types: [{ type: { name: 'fire' } }],
  sprites: {
    other: {
      dream_world: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
      },
    },
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
};

const mockProps = {
  data: mockData,
  onClick: jest.fn(),
  className: 'pokemon-card',
};

test('renders PokemonCard', () => {
  render(<PokemonCard {...mockProps} />);

  expect(screen.getByText('Charmender')).toBeInTheDocument();

  const imgElement = screen.getByAltText('Avatar');
  expect(imgElement).toHaveAttribute('src', mockData.sprites.other.dream_world.front_default);

  expect(screen.getByText('004')).toBeInTheDocument();
});

test('calls onClick handler when clicked', () => {
  render(<PokemonCard {...mockProps} />);

  const cardElement = screen.getByRole('presentation');
  fireEvent.click(cardElement);

  expect(mockProps.onClick).toHaveBeenCalled();
});
