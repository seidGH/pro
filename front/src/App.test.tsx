import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import '@testing-library/jest-dom'; // Required for .toBeInTheDocument()
import App from './App';

// 1. MOCK THE FETCH: This prevents the 'ECONNREFUSED' network error
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
) as any;

test('renders the app content', () => {
  render(<App />);
  
  // 2. MATCH THE ACTUAL TEXT: Use the text visible in your <h1>
  const element = screen.getByText(/Parts Inventory/i);
  
  // 3. ASSERT: Confirm it exists
  expect(element).toBeInTheDocument();
});
