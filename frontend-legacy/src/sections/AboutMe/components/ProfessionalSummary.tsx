import React from "react";
import styles from "../AboutMe.module.css";
import { useLanguage } from "../../../context/LanguageContext";

const ProfessionalSummary: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <div className={styles.subsection}>
      <h3 className={`subsectionTitle`}>
        {translations.aboutMe.professionalSummaryTitle}
      </h3>
      {translations.aboutMe.summary.map((paragraph, index) => (
        <p
          key={index}
          className={`text`}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  );
};

export default ProfessionalSummary;
