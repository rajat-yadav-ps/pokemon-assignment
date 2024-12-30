import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Apploader from './loader';

test('renders Loader component with correct content', () => {
  render(<Apploader className="custom-loader" />);

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
