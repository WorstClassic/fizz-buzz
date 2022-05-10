import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders submit button', () => {
  const SUBMIT_TEXT = 'Click and Be Judged!';
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(SUBMIT_TEXT);
  expect(linkElement).toBeInTheDocument();
});
