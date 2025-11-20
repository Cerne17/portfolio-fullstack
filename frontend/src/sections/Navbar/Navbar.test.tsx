import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('renders brand name', () => {
    render(<Navbar />);
    const brandElement = screen.getByText(/Miguel Cerne/i);
    expect(brandElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Navbar />);
    const aboutLink = screen.getByText(/About Me/i);
    const contactLink = screen.getByText(/Contact Me/i);
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('renders hamburger menu on mobile', () => {
    render(<Navbar />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});
