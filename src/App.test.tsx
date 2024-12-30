import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders learn react link', async () => {
  await act(async () => {
    render(<App />);
  });

  const linkElement = await screen.findByText(/Search for any Pokémon that exist on the planet/i);
  expect(linkElement).toBeInTheDocument();
});
