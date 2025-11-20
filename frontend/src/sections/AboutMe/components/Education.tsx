import React from "react";
import styles from "../AboutMe.module.css";

const Education: React.FC = () => {
  return (
    <div className={styles.subsection}>
      <h3 className={`subsectionTitle`}>Education</h3>
      <div className={styles.educationItem}>
        <h4 className={`subsubsectionTitle`}>
          Bachelor of Electrical & Computer Engineering (GPA 3.3 - 8.2/10)
        </h4>
        <p className={styles.educationInstitution}>
          Federal University of Rio de Janeiro (UFRJ), Rio de Janeiro, RJ,
          Brazil
        </p>
        <p className={styles.educationYear}>Graduation: December 2027</p>
      </div>
    </div>
  );
};

export default Education;
