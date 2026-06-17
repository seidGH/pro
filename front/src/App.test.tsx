import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import '@testing-library/jest-dom';
import App from './App';

// Use a more robust mock structure
global.fetch = vi.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
  } as Response)
);

test('renders the app content', () => {
  render(<App />);
  
  const headingElement = screen.getByText(/Parts Inventory/i);
  expect(headingElement).toBeInTheDocument();
});
