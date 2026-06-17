import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import '@testing-library/jest-dom'; 
import App from './App';

// 1. MOCK THE FETCH: This fakes the API response so the app doesn't try to connect to the backend
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
) as any;

test('renders the app content', () => {
  render(<App />);
  
  // 2. MATCH THE ACTUAL TEXT: Use "Parts Inventory" as shown in your test dump
  const headingElement = screen.getByText(/Parts Inventory/i);
  
  // 3. ASSERT: Confirm the element is in the document
  expect(headingElement).toBeInTheDocument();
});
