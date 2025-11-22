import React, { useState } from "react";
import styles from "./Navbar.module.css"; // Import CSS Module
import navLinks from "../../data/navigation";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import LanguageToggle from "../../components/LanguageToggle/LanguageToggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
              >
                {link.label}
              </a>
            </li>
          ))}
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
