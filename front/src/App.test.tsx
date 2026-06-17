import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import '@testing-library/jest-dom';
import App from './App';

// Explicitly type the fetch mock to satisfy TypeScript
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
  } as Response)
);

test('renders the app content', () => {
  render(<App />);
  
  // Use a regex matcher for the text
  const headingElement = screen.getByText(/Parts Inventory/i);
  
  // Ensure the element exists in the DOM
  expect(headingElement).toBeInTheDocument();
});
