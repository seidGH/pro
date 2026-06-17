import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import '@testing-library/jest-dom'; 
import App from './App';

// Mock the global fetch with a specific return type
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
  } as Response)
);

test('renders the app content', () => {
  render(<App />);
  
  // Look for the header
  const headingElement = screen.getByText(/Parts Inventory/i);
  
  // Assert it exists
  expect(headingElement).toBeInTheDocument();
});
