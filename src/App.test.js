import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpace } from './App';

test('button has correct initial color', () => {
  render(<App/>);
  
  // find ...
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton.textContent).toBe('Change to red');

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  expect(colorButton.textContent).toBe('Change to blue');
});

test('initial conditions', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();
});

test('button is disabled after clicking checkbox', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
  expect(checkBox).toBeChecked();

  fireEvent.click(checkBox);

  expect(colorButton).not.toBeEnabled();

  fireEvent.click(checkBox);

  expect(colorButton).toBeEnabled();
});

test('button is grey when disabled', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkBox);

  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});


describe('spaces before capital letters', () => {
  test('Works with color name with no inner capital letters', () => {
    expect(replaceCamelWithSpace('Red')).toBe('Red');
  });

  test('Works with color names with 1 inner capital letter', () => {
    expect(replaceCamelWithSpace('MidnightBlue')).toBe('Midnight Blue');

  });

  test('Works with color names with multiple inner capital letters', () => {
    expect(replaceCamelWithSpace('MediumVioletRed')).toBe('Medium Violet Red');
  });
});