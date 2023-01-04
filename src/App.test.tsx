import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<App />);

  // ACT
  await userEvent.click(screen.getByText('Load Greeting'));
  await screen.findByRole('heading');

  // ASSERT
  expect(screen.getByRole('heading')).toBeDefined();
});
