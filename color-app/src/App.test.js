import { screen, render } from '@testing-library/react';
import App from './App.js';

test('renders button with correct initial color', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'Change to blue' });

  expect(button).toHaveStyle({ backgroundColor: 'red'});

});
