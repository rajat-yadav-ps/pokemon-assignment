import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './header';

test('renders Header with children', () => {
  render(
    <Header>
      <h1>Header</h1>
    </Header>
  );

  // Check if the children are rendered
  expect(screen.getByText('Header')).toBeInTheDocument();
});
