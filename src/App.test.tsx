import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Demi Market Software Solutions landing page', () => {
  render(<App />);
  expect(screen.getByText(/Demi Market Software Solutions/i)).toBeInTheDocument();
  expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
});
