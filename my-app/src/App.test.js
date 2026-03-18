import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero heading and primary call to action', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /hi, i.?m adrian/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view my work/i })).toBeInTheDocument();
});
