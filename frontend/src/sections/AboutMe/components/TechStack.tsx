import React from "react";
import styles from "../../AboutMe.module.css";
import SkillPill from "../../../components/SkillPill/SkillPill";
import { frontendSkills, backendSkills, datascienceSkills } from "../../../data/skills";

const TechStack: React.FC = () => {
  return (
    <div className={styles.subsection}>
      <h3 className={`subsectionTitle`}>My Tech Stack</h3>

      {/* Frontend */}
      <div className={styles.techStackContainer}>
        <h4 className={`subsubsectionTitle ${styles.leftBar}`}>Frontend</h4>
        <div className={styles.skillsGrid}>
          {frontendSkills.map((skill) => {
            return (
              <SkillPill
                key={skill.id}
                id={skill.id}
                icon={skill.icon}
                title={skill.title}
                stack="frontend"
              />
            );
          })}
        </div>
      </div>

      {/* Backend */}
      <div className={styles.techStackContainer}>
        <h4 className={`subsubsectionTitle ${styles.leftBar}`}>Backend</h4>
        <div className={styles.skillsGrid}>
          {backendSkills.map((skill) => {
            return (
              <SkillPill
                key={skill.id}
                id={skill.id}
                icon={skill.icon}
                title={skill.title}
                stack="backend"
              />
            );
          })}
        </div>
      </div>

      {/* Data Science */}
      <div className={styles.techStackContainer}>
        <h4 className={`subsubsectionTitle ${styles.leftBar}`}>
          Data Science
        </h4>
        <div className={styles.skillsGrid}>
          {datascienceSkills.map((skill) => {
            return (
              <SkillPill
                key={skill.id}
                id={skill.id}
                icon={skill.icon}
                title={skill.title}
                stack="datascience"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
