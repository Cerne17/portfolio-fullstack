import React from "react";
import styles from "../AboutMe.module.css";
import { useLanguage } from "../../../context/LanguageContext";

const Certifications: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <div className={styles.subsection}>
      <h3 className={`subsectionTitle`}>{translations.aboutMe.certificationsTitle}</h3>
      <ul className={styles.certificationsList}>
        {translations.certifications.map((cert) => (
          <li key={cert.id}>
            {cert.title} - {cert.issuer} ({cert.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
