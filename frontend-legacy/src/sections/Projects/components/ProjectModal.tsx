import React, { useEffect } from "react";
import styles from "./ProjectModal.module.css";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import SkillPill from "../../../components/SkillPill/SkillPill";
import { projectSkills } from "../../../data/techStack";
import { useLanguage } from "../../../context/LanguageContext";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { translations } = useLanguage();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FiX />
        </button>
        
        <div className={styles.modalBody}>
          {project.image && (
            <div className={styles.imageContainer}>
              <img
                src={require(`../../../assets/${project.image}`)}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>
          )}
          
          <div className={styles.infoContainer}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            
            <p className={styles.projectDescription}>{project.description}</p>
            
            <div className={styles.techStack}>
              <h4 className={styles.sectionLabel}>{translations.aboutMe.techTitle}</h4>
              <div className={styles.skillsGrid}>
                {project.techStack
                  .sort((a: string, b: string) => {
                    const stackOrder = { frontend: 1, backend: 2, datascience: 3 };
                    const skillA = projectSkills[a as keyof typeof projectSkills];
                    const skillB = projectSkills[b as keyof typeof projectSkills];
                    
                    if (!skillA || !skillB) return 0;
                    
                    const orderA = stackOrder[skillA.stack as keyof typeof stackOrder] || 99;
                    const orderB = stackOrder[skillB.stack as keyof typeof stackOrder] || 99;
                    
                    return orderA - orderB;
                  })
                  .map((skillName: string, index: number) => {
                    const skillInfo = projectSkills[skillName as keyof typeof projectSkills];
                    if (!skillInfo) return null;
                    
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

            <div className={styles.modalLinks}>
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                >
                  <FiGithub /> {translations.projects.viewCode}
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.ctaButton} ${styles.primary}`}
                >
                  <FiExternalLink /> {translations.projects.viewDemo}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
