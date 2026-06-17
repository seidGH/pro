import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the app content', () => {
  render(<App />);
  // Look for any text that is definitely in your App.tsx file
  // For example, if your app has "Vite + React", use that:
  const element = screen.getByText(/Vite/i); 
  expect(element).toBeDefined();
});
