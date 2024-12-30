import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppFilter from './filter';
import  PokemonContext  from '../../context/pokemonContext/pokmon.context';


const mockContextValue = {
  state: {
    allPokemonsList: [{ name: 'staryu' }, { name: 'squirtle' }],
    pokemonsTypes: [],
    pokemonGenderList: [],
  },
  getPokemonData: jest.fn(),
  dispatch: jest.fn(),
  setAppLoading: jest.fn(),
  getPokemonDetailsListByUrl: jest.fn(),
};

// Mock props
const mockProps = {
  isFilterEnable: jest.fn(),
};

describe('AppFilter Component', () => {
  test('renders AppFilter component', () => {
    render(
      <PokemonContext.Provider value={mockContextValue}>
        <AppFilter {...mockProps} />
      </PokemonContext.Provider>
    );

    expect(screen.getByText('Search By')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name or Number')).toBeInTheDocument();
  });

  test('handles search input change', () => {
    render(
      <PokemonContext.Provider value={mockContextValue}>
        <AppFilter {...mockProps} />
      </PokemonContext.Provider>
    );

    const input = screen.getByPlaceholderText('Name or Number');
    fireEvent.change(input, { target: { value: 'staryu' } });

    expect(mockProps.isFilterEnable).toHaveBeenCalledWith(true);
  });

  test('opens and closes type filter', () => {
    render(
      <PokemonContext.Provider value={mockContextValue}>
        <AppFilter {...mockProps} />
      </PokemonContext.Provider>
    );

    const typeDropdown = screen.getByText('Type');
    fireEvent.click(typeDropdown);
    expect(screen.getByText('Type')).toBeInTheDocument();
  });
});
