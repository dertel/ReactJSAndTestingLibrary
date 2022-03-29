import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);
  
  // find ...
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();
});

test('button is disabled after clicking checkbox', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).toBeChecked();

  fireEvent.click(checkBox);

  expect(colorButton).not.toBeEnabled();

  fireEvent.click(checkBox);

  expect(colorButton).toBeEnabled();
});