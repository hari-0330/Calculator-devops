import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders calculator title', () => {
  render(<App />);
  const titleElement = screen.getByText(/calculator app/i);
  expect(titleElement).toBeInTheDocument();
});

test('performs addition correctly', () => {
  render(<App />);
  
  const btn2 = screen.getByText('2');
  const btnPlus = screen.getByText('+');
  const btn3 = screen.getByText('3');
  const btnEqual = screen.getByText('=');
  const resultInput = screen.getByRole('textbox');

  fireEvent.click(btn2);
  fireEvent.click(btnPlus);
  fireEvent.click(btn3);
  fireEvent.click(btnEqual);

  expect(resultInput.value).toBe('5');
});

test('clears the input when C is pressed', () => {
  render(<App />);
  
  const btn2 = screen.getByText('2');
  const btnClear = screen.getByText('C');
  const resultInput = screen.getByRole('textbox');

  fireEvent.click(btn2);
  expect(resultInput.value).toBe('2');

  fireEvent.click(btnClear);
  expect(resultInput.value).toBe('');
});
