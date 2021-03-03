import { screen, render, fireEvent } from '@testing-library/react';
import App from './App.js';

test('color button renders and updates correctly', () => {
  render(<App />);

  // Intital render
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // On click
  fireEvent.click(colorButton);

  expect(colorButton).toHaveTextContent('Change to red');

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});

});
