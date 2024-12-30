import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppMultiSelectDropDown from './multiSelectdropDown';

const mockData = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
];

const mockProps = {
  label: 'Select Options',
  onChangeHandler: jest.fn(),
  data: mockData,
  isOpen: true,
  placeholder: 'Choose...',
  onOpenHandler: jest.fn(),
  onCloseHandler: jest.fn(),
  onCleanHandler: jest.fn(),
};

test('renders AppMultiSelectDropDown with label', () => {
  render(<AppMultiSelectDropDown {...mockProps} />);

  expect(screen.getByText('Select Options')).toBeInTheDocument();
});
