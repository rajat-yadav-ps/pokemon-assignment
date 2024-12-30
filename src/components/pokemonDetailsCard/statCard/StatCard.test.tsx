import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatCard from './statCard';

const mockStats = [
  { stat: { name: 'hp' }, base_stat: 80 },
  { stat: { name: 'attack' }, base_stat: 70 },
  { stat: { name: 'special-defense' }, base_stat: 80 },
];

test('renders StatCard with stats', () => {
  render(<StatCard stats={mockStats} />);

  expect(screen.getByText('Stats')).toBeInTheDocument();

  mockStats.forEach((item) => {

    const statElements = screen.getAllByText(item.base_stat.toString());
    expect(statElements.length).toBeGreaterThan(0);
  });
});