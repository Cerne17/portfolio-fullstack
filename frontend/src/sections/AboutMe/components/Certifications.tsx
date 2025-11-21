import React from "react";
import styles from "../AboutMe.module.css";
import certifications from "../../../data/certifications";

const Certifications: React.FC = () => {
  return (
    <div className={styles.subsection}>
      <h3 className={`subsectionTitle`}>Certifications & Awards</h3>
      <ul className={styles.certificationsList}>
        {certifications.map((cert) => (
          <li key={cert.id}>
            {cert.title} - {cert.issuer} ({cert.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
