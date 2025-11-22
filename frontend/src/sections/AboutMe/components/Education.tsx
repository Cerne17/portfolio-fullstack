import React from "react";
import styles from "../AboutMe.module.css";
import { useLanguage } from "../../../context/LanguageContext";

const Education: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <div className={styles.subsection}>
      <h3 className={`subsectionTitle`}>
        {translations.aboutMe.educationTitle}
      </h3>
      {translations.education.map((edu) => (
        <div className={styles.educationItem} key={edu.id}>
          <h4 className={`subsubsectionTitle`}>{edu.degree}</h4>
          <p className={styles.educationInstitution}>{edu.institution}</p>
          <p className={styles.educationYear}>Graduation: {edu.graduation}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
