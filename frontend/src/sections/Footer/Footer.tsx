import React from 'react';
import styles from './Footer.module.css';
import profile from "../../data/profile";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        {profile.socialLinks.map((link) => {
          const Icon = link.icon as React.ElementType;
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              <Icon />
            </a>
          );
        })}
      </div>
      <p className={styles.copyrightText}>
        © {currentYear} Miguel Cerne. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
