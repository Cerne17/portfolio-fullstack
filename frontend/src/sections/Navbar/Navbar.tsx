import React, { useState } from "react";
import styles from "./Navbar.module.css"; // Import CSS Module
import navLinks from "../../data/navigation";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import LanguageToggle from "../../components/LanguageToggle/LanguageToggle";

import { useLanguage } from "../../context/LanguageContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { translations, language } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLabel = (id: string) => {
    switch (id) {
      case "about-me":
        return translations.nav.aboutMe;
      case "projects":
        return translations.nav.projects;
      case "contact-me":
        return translations.nav.contactMe;
      case "blog":
        return translations.nav.blog;
      default:
        return "";
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#hero" className={styles.brand}>
          Miguel Cerne
        </a>
        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div />
          <div />
          <div />
        </button>
        <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <li className={styles.navItem} key={link.id}>
              <a
                href={link.href}
                className={styles.navLink}
                onClick={toggleMenu}
                style={{ "--i": navLinks.indexOf(link) } as React.CSSProperties}
              >
                {getLabel(link.id)}
              </a>
            </li>
          ))}
          <li className={styles.navItem}>
            <a
              href={language === "pt" ? "/Curriculo_MiguelCerne_Engenheiro.pdf" : "/MiguelCerne_Engineer_CV.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadCvBtn}
              download
            >
              {translations.nav.downloadCV}
            </a>
          </li>
          <li className={styles.navItem}>
            <ThemeToggle />
          </li>
          <li className={styles.navItem}>
            <LanguageToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
