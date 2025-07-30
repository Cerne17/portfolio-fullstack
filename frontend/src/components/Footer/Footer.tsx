import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const Github = FaGithub as unknown as React.FC;
  const Gmail = SiGmail as unknown as React.FC;
  const Linkedin = FaLinkedin as unknown as React.FC;

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a 
          href="https://github.com/Cerne17" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github />
        </a>
        <a 
          href="https://www.linkedin.com/in/miguelcerne/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>
        <a 
          href="mailto:miguelcerne.dev@gmail.com"
          aria-label="Email"
        >
          <Gmail />
        </a>
      </div>
      <p className={styles.copyrightText}>
        © {currentYear} Miguel Cerne. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
