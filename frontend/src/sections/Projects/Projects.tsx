import React from "react";
import styles from "./Projects.module.css";
import { projectSkills } from "../../data/projects";
import SkillPill from "../../components/SkillPill/SkillPill";
import CtaBlueButton from "../../components/CtaBlueButton/CtaBlueButton";
import CtaTransparentButton from "../../components/CtaTransparentButton/CtaTransparentButton";
import { useLanguage } from "../../context/LanguageContext";

const Projects: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={`sectionTitle`}>{translations.projects.title}</h2>
      <div className={styles.projectsGrid}>
        {translations.projects.list.map((project) => (
          <div className={styles.projectCard} key={project.id}>
            {project.image && (
              <img
                src={require(`../../assets/${project.image}`)}
                alt={project.title}
                className={styles.projectImage}
              />
            )}
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectSkills}>
                {project.techStack.map((skillName, index) => {
                  const skillInfo =
                    projectSkills[skillName as keyof typeof projectSkills];
                  if (!skillInfo) {
                    console.warn(`Skill "${skillName}" not found in projectSkills`);
                    return null;
                  }
                  return (
                    <SkillPill
                      key={`${project.id}-${index}`}
                      id={index}
                      icon={skillInfo.icon}
                      title={skillName}
                      stack={skillInfo.stack as "frontend" | "backend" | "datascience"}
                    />
                  );
                })}
              </div>
              <div className={styles.projectLinks}>
                {project.repoUrl && (
                  <CtaTransparentButton
                    title={translations.projects.viewCode}
                    link={project.repoUrl}
                  />
                )}
                {/* Demo URL handling if present in data, currently commented out in original data but interface supports it */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;