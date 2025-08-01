import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css"; // Import CSS Module

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#hero" className={styles.brand}>
          Miguel Cerne
        </a>
        <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>

          <li className={styles.navItem}>

            <a href="#about-me" className={styles.navLink}>
              About Me
            </a>
          </li>

          {/* TODO: implement the projects section and enable it on Navbar */}
          {/* <li className={styles.navItem}> */}
          {/*   <a href="#projects" className={styles.navLink}> */}
          {/*     Projects */}
          {/*   </a> */}
          {/* </li> */}

          <li className={styles.navItem}>
            <a href="#contact-me" className={styles.navLink}>
              Contact Me
            </a>
          </li>

          {/* TODO: implement the Blog Page and enable it on Navbar */}
          {/* <li className={styles.navItem}> */}
          {/*   <a href="#blog" className={styles.navLink}> */}
          {/*     Blog */}
          {/*   </a> */}
          {/* </li> */}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
