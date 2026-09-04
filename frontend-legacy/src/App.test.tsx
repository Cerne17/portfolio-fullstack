import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the useForm hook from @formspree/react
jest.mock('@formspree/react', () => ({
  useForm: () => [{ succeeded: false, errors: [] }, jest.fn()],
  ValidationError: () => <div>Validation Error</div>,
}));

test('renders contact me section', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /Contact Me/i });
  expect(headingElement).toBeInTheDocument();
});
