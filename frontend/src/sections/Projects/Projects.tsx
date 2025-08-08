import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import SkillPill from "../../components/SkillPill/SkillPill";
import CtaBlueButton from "../../components/CtaBlueButton/CtaBlueButton";
import CtaTransparentButton from "../../components/CtaTransparentButton/CtaTransparentButton";
import { IconType } from "react-icons";
import * as SiIcons from "react-icons/si";
import skillsData from "../../data/skills.json";

// Create a map for quick lookup of skill data
const skillMap = new Map(skillsData.map(skill => [skill.title, { icon: skill.icon, stack: skill.stack }]));

const getIcon = (iconName: string): IconType => {
  type IconName = keyof typeof SiIcons;
  const icon = SiIcons[iconName as IconName];
  return icon;
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={`sectionTitle`}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, projectIndex) => (
          <div className={styles.projectCard} key={project.title}>
            <img src={project.imageSrc} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectSkills}>
                {project.skills.map((skill, skillIndex) => {
                  const skillInfo = skillMap.get(skill);
                  if (!skillInfo) {
                    console.warn(`Skill "${skill}" not found in skills.json`);
                    return null; // Or render a placeholder SkillPill
                  }
                  return (
                    <SkillPill
                      key={`${project.title}-${skillIndex}`}
                      id={skillIndex} // Using index as ID for now, assuming skills within a project are unique
                      icon={getIcon(skillInfo.icon)}
                      title={skill}
                      stack={skillInfo.stack as "frontend" | "backend" | "datascience"}
                    />
                  );
                })}
              </div>
              <div className={styles.projectLinks}>
                {project.demo && (
                  <CtaBlueButton title="Live Demo" link={project.demo} />
                )}
                {project.source && (
                  <CtaTransparentButton title="Source Code" link={project.source} />
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