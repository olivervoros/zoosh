import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders movie database homepage', () => {
  const { getByText } = render(<App />);
  const companyName = getByText(/Zoosh/i);
  expect(companyName).toBeInTheDocument();
});
