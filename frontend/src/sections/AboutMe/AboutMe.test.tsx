import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

describe('AboutMe Component', () => {
  test('renders section title', () => {
    render(<AboutMe />);
    const titleElement = screen.getByRole('heading', { level: 2, name: /About Me/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders professional summary', () => {
    render(<AboutMe />);
    const summaryTitle = screen.getByRole('heading', { level: 3, name: /Professional Summary/i });
    expect(summaryTitle).toBeInTheDocument();
    const summaryText = screen.getByText(/Electrical and Computer Engineering/i);
    expect(summaryText).toBeInTheDocument();
  });

  test('renders tech stack sections', () => {
    render(<AboutMe />);
    expect(screen.getByRole('heading', { name: /^Frontend$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Backend$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Data Science$/i })).toBeInTheDocument();
  });

  test('renders experience section', () => {
    render(<AboutMe />);
    const experienceTitle = screen.getByRole('heading', { level: 3, name: /Experiences/i });
    expect(experienceTitle).toBeInTheDocument();
  });
});
