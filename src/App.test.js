import { screen, render, fireEvent } from '@testing-library/react';
import App from './App.js';

test('color button renders and updates correctly', () => {
  render(<App />);

  // Intital render
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveClass('btn-red');

  // On click
  fireEvent.click(colorButton);
  expect(colorButton).toHaveTextContent('Change to red');
  expect(colorButton).toHaveClass('btn-blue');
});

test('initial render for button and checkbox', () => {
  render(<App />);

  // Button enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  // Checkbox unchecked
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });
  expect(checkbox).not.toBeChecked();

});

test('toggle button state based on checkbox value', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByLabelText('Disable Button');

  // toggle checkbox
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

// test user flow
// intial render -> red,
// checkbox enable -> gray
// checkbox disable -> red
// button on click -> blue
// checkbox enable -> gray
// checkbox disable -> blue

test('user flow', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });

  expect(colorButton).toHaveClass('btn-red');
  fireEvent.click(checkbox);
  expect(colorButton).toHaveClass('btn-disabled');
  fireEvent.click(checkbox);
  expect(colorButton).toHaveClass('btn-red');

  fireEvent.click(colorButton);
  expect(colorButton).toHaveClass('btn-blue');
  fireEvent.click(checkbox);
  expect(colorButton).toHaveClass('btn-disabled');
  fireEvent.click(checkbox);
  expect(colorButton).toHaveClass('btn-blue');
});
