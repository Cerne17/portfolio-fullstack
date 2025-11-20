import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  test('renders main title', () => {
    render(<Hero />);
    const titleElement = screen.getByRole('heading', { level: 1, name: /Miguel Cerne/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders subtitle', () => {
    render(<Hero />);
    const subtitleElement = screen.getByRole('heading', { level: 2, name: /Full-Stack Engineer & Machine Learning Researcher/i });
    expect(subtitleElement).toBeInTheDocument();
  });

  test('renders CTA buttons', () => {
    render(<Hero />);
    const projectsButton = screen.getByText(/My Projects/i);
    const bookCallButton = screen.getByText(/Book a Call/i);
    expect(projectsButton).toBeInTheDocument();
    expect(bookCallButton).toBeInTheDocument();
  });
});
