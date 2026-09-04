import React from "react";
import styles from "../AboutMe.module.css";
import SkillPill from "../../../components/SkillPill/SkillPill";
import { useLanguage } from "../../../context/LanguageContext";
import { projectSkills } from "../../../data/techStack";

const ExperienceList: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <div className={styles.subsection}>
      <h3 className={`subsectionTitle`}>
        {translations.aboutMe.experiencesTitle}
      </h3>
      {translations.experiences.map((experience) => {
        return (
          <div className={styles.experienceItem} key={experience.id}>
            <h4 className={`subsubsectionTitle`}>{experience.title}</h4>
            <p className={styles.experienceDuration}>
              {experience.startMonth} {experience.startYear} -{" "}
              {experience.endMonth} {experience.endYear}
            </p>
            <ul className={styles.experienceResponsibilities}>
              {experience.responsibilities.map((responsibility, index) => {
                return <li key={index}>{responsibility}</li>;
              })}
            </ul>
            <div className={styles.experienceDetails}>
              <div>
                <h5 className={`subsubsectionTitle`}>
                  {translations.aboutMe.highlightsTitle}
                </h5>
                <ul className={styles.experienceHighlights}>
                  {experience.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className={`subsubsectionTitle`}>
                  {translations.aboutMe.impactTitle}
                </h5>
                <ul className={styles.experienceImpact}>
                  {experience.impact.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className={`subsubsectionTitle`}>
                  {translations.aboutMe.techTitle}
                </h5>
                <div className={styles.experienceTechStack}>
                  {experience.techStack.map((techName, index) => {
                    const skillInfo =
                      projectSkills[techName as keyof typeof projectSkills];
                    
                    if (!skillInfo) return null;

                    return (
                      <SkillPill
                        key={index}
                        id={index}
                        icon={skillInfo.icon}
                        title={techName}
                        stack={skillInfo.stack as "frontend" | "backend" | "datascience"}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceList;
