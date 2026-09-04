import React from 'react';
import styles from './Footer.module.css';
import { socialLinks } from "../../data/socials";

import { useLanguage } from "../../context/LanguageContext";

const Footer: React.FC = () => {
  const { translations } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        {socialLinks.map((link) => {
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
        {translations.footer.copyright.replace("{year}", currentYear.toString())}
      </p>
    </footer>
  );
};

export default Footer;
