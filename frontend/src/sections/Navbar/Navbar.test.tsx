import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { ThemeProvider } from "../../context/ThemeContext";
describe('Navbar Component', () => {
  test("renders navbar brand", () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );
    const brandElement = screen.getByText(/Miguel Cerne/i);
    expect(brandElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );
    const aboutLink = screen.getByText(/About Me/i);
    const contactLink = screen.getByText(/Contact Me/i);
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test("toggles mobile menu", () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );
    const hamburger = screen.getByRole("button", { name: /Toggle menu/i, hidden: true });
    fireEvent.click(hamburger);
    // Add assertions for menu state if possible, or check for class changes
    // Note: Testing CSS module class changes might be tricky without specific setup
  });
});
