import React from "react";
import styles from "../../AboutMe.module.css";

const ProfessionalSummary: React.FC = () => {
  return (
    <div className={styles.subsection}>
      <h3 className={`subsectionTitle`}>Professional Summary</h3>
      <p className={`text`}>
        I am a third-year{" "}
        <strong>Electrical and Computer Engineering</strong> undergraduate at UFRJ,
        passionate about bridging the gap between software and hardware through
        innovative solutions. My academic path and professional experiences have
        strengthened my skills in <strong>backend development</strong>,{" "}
        <strong>machine learning</strong>, and <strong>data analysis</strong>.
      </p>
      <p className={`text`}>
        I have worked as a <strong>Backend Developer</strong> at{" "}
        <strong>Fluxo Consultoria</strong> (Fluxo Consultancy) - an engineering
        undergratuate business -, where I built and maintained APIs using{" "}
        <strong>NestJS</strong> and <strong>PostgreSQL</strong>, applying clean
        architecture principles and best practices in software engineering.
        Additionally, as a <strong>Machine Learning Researcher</strong> at
        GTA-UFRJ (Grupo de Teleinformática e Automação - Teleinformatics and
        Automation Group), I explored data-driven solutions using{" "}
        <strong>Scikit-Learn</strong>, <strong>Pandas</strong>, and{" "}
        <strong>Matplotlib</strong>, while leveraging high-performance computing
        with TPUs.
      </p>
      <p className={`text`}>
        I thrive on hands-on learning, tackling complex problems, and applying
        emerging technologies. My goal is to contribute to impactful projects
        that push the boundaries of software engineering and data science, while
        continuing to grow as a technology professional.
      </p>
    </div>
  );
};

export default ProfessionalSummary;
