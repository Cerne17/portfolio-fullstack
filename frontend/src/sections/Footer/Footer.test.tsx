import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { LanguageProvider } from '../../context/LanguageContext';

describe('Footer Component', () => {
  test('renders copyright text', () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );
    const currentYear = new Date().getFullYear();
    const copyrightElement = screen.getByText(new RegExp(`© ${currentYear} Miguel Cerne`, 'i'));
    expect(copyrightElement).toBeInTheDocument();
  });

  test('renders social links', () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );
    const githubLink = screen.getByLabelText(/GitHub/i);
    const linkedinLink = screen.getByLabelText(/LinkedIn/i);
    const emailLink = screen.getByLabelText(/Email/i);

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(emailLink).toBeInTheDocument();
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Cerne17');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/miguelcerne/');
    expect(emailLink).toHaveAttribute('href', 'mailto:miguelcerne.dev@gmail.com');
  });
});
