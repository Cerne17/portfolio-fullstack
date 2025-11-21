import React from "react";
import styles from "./Projects.module.css";
import projects, { projectSkills } from "../../data/projects";
import SkillPill from "../../components/SkillPill/SkillPill";
import CtaBlueButton from "../../components/CtaBlueButton/CtaBlueButton";
import CtaTransparentButton from "../../components/CtaTransparentButton/CtaTransparentButton";

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={`sectionTitle`}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
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
                {project.demoUrl && (
                  <CtaBlueButton title="Live Demo" link={project.demoUrl} />
                )}
                {project.repoUrl && (
                  <CtaTransparentButton
                    title="Source Code"
                    link={project.repoUrl}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;