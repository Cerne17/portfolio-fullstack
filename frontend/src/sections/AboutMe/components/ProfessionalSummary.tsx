import React from "react";
import styles from "../AboutMe.module.css";
import profile from "../../../data/profile";

const ProfessionalSummary: React.FC = () => {
  return (
    <div className={styles.subsection}>
      <h3 className={`subsectionTitle`}>Professional Summary</h3>
      {profile.summary.map((paragraph, index) => (
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
