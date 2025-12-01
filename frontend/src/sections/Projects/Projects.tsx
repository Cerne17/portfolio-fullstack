import React from "react";
import styles from "./Projects.module.css";
import { projectSkills } from "../../data/techStack";
import SkillPill from "../../components/SkillPill/SkillPill";

import { useLanguage } from "../../context/LanguageContext";
import { FiGithub, FiExternalLink } from "react-icons/fi";

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
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectLinks}>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label={translations.projects.viewCode}
                    >
                      <FiGithub />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label={translations.projects.viewDemo}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectSkills}>
                {project.techStack
                  .sort((a, b) => {
                    const stackOrder = { frontend: 1, backend: 2, datascience: 3 };
                    const skillA = projectSkills[a as keyof typeof projectSkills];
                    const skillB = projectSkills[b as keyof typeof projectSkills];
                    
                    if (!skillA || !skillB) return 0;
                    
                    const orderA = stackOrder[skillA.stack as keyof typeof stackOrder] || 99;
                    const orderB = stackOrder[skillB.stack as keyof typeof stackOrder] || 99;
                    
                    return orderA - orderB;
                  })
                  .map((skillName, index) => {
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;