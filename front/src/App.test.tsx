import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import '@testing-library/jest-dom'; // Required for .toBeInTheDocument()
import App from './App';

// Mock the global fetch to prevent connection errors during tests
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]), // Returns empty data so the app doesn't crash
  })
) as any;

test('renders the app content', () => {
  render(<App />);
  
  // Use the text that actually appears in your <h1>
  const element = screen.getByText(/Parts Inventory/i);
  
  // .toBeInTheDocument() is the standard way to check for visibility
  expect(element).toBeInTheDocument();
});
