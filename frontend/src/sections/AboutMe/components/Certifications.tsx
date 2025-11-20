import React from "react";
import styles from "../../AboutMe.module.css";

const Certifications: React.FC = () => {
  return (
    <div className={styles.subsection}>
      <h3 className={`subsectionTitle`}>Certifications & Awards</h3>
      <ul className={styles.certificationsList}>
        <li>ChatGPT Mastery - Adapta org. (2024)</li>
      </ul>
    </div>
  );
};

export default Certifications;
