import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchFilter from './search.filter';

test('renders SearchFilter with label and placeholder', () => {
  render(
    <SearchFilter
      placeholder="Search..."
      inputClass="custom-input"
      label="Search Label"
      onChangeHandler={undefined}
    />
  );

  expect(screen.getByText('Search Label')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
});

test('calls onChangeHandler when input changes', () => {
  const handleChange = jest.fn();

  render(
    <SearchFilter
      placeholder="Search..."
      inputClass="custom-input"
      label="Search Label"
      onChangeHandler={handleChange}
    />
  );

  const input = screen.getByPlaceholderText('Search...');
  fireEvent.change(input, { target: { value: 'Pikachu' } });

  expect(handleChange).toHaveBeenCalledTimes(1);
});

test('renders SearchIcon button', () => {
  render(
    <SearchFilter
      placeholder="Search..."
      inputClass="custom-input"
      label="Search Label"
      onChangeHandler={undefined}
    />
  );

  expect(screen.getByRole('button')).toBeInTheDocument();
});
