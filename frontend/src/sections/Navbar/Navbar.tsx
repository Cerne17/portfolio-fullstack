import React, { useState } from "react";
import styles from "./Navbar.module.css"; // Import CSS Module

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
        <button className={`${styles.hamburger} ${isOpen ? styles.open : ""}` } onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </button>
        <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
          <li className={styles.navItem}>
            <a href="#about-me" className={styles.navLink} onClick={toggleMenu}>
              About Me
            </a>
          </li>

          <li className={styles.navItem}>
            <a href="#projects" className={styles.navLink} onClick={toggleMenu}>
              Projects
            </a>
          </li>

          <li className={styles.navItem}>
            <a href="#contact-me" className={styles.navLink} onClick={toggleMenu}>
              Contact Me
            </a>
          </li>

          {/* TODO: implement the Blog Page and enable it on Navbar */}
          {/* <li className={styles.navItem}> */}
          {/*   <a href="#blog" className={styles.navLink} onClick={toggleMenu}> */}
          {/*     Blog */}
          {/*   </a> */}
          {/* </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
