import { render, screen, waitFor } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import '@testing-library/jest-dom'; 
import App from './App';

// MOCK THE API: Replace the backend call with a controlled response
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      { id: 1, name: 'Part A', model: 'M1', price: 10, stock: 5 }
    ]),
  })
) as any;

test('renders app and loads mocked data', async () => {
  render(<App />);
  
  // Verify the Header is present
  const heading = screen.getByText(/Parts Inventory/i);
  expect(heading).toBeInTheDocument();

  // Verify the button is present
  const button = screen.getByText(/Add Part/i);
  expect(button).toBeInTheDocument();
});
