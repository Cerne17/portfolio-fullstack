import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Navbar.module.css"; // Import CSS Module
import navLinks from "../../data/navigation";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import LanguageToggle from "../../components/LanguageToggle/LanguageToggle";

import { useLanguage } from "../../context/LanguageContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { translations, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        // if scroll down and not at top
        setIsVisible(false);
      } else {
        // if scroll up
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

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
    <nav className={`${styles.navbar} ${!isVisible ? styles.navbarHidden : ""}`}>
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
              href={
                language === "pt"
                  ? `${process.env.PUBLIC_URL}/Curriculo_MiguelCerne_Engenheiro.pdf`
                  : `${process.env.PUBLIC_URL}/MiguelCerne_Engineer_CV.pdf`
              }
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
