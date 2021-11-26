import { render } from '@testing-library/react';
import App from './App';

test('it render the main screen correctly', () => {
  const { getByText, getByRole } = render(<App />);
  
  //Check for heading
  expect(getByText('RGB to Hex Converter')).not.toBeNull();

  //Check for buttons
  expect(getByRole('button', { name:/Convert/i })).not.toBeNull();
  expect(getByRole('button', { name:/Reset/i })).not.toBeNull();

  //Check for color input fields
  expect(getByText('red')).not.toBeNull();
  expect(getByText('green')).not.toBeNull();
  expect(getByText('blue')).not.toBeNull();
});
