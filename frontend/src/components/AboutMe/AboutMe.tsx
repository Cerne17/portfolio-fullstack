import React, { useMemo } from "react";
import styles from "./AboutMe.module.css";
import CtaBlueButton from "../CtaBlueButton/CtaBlueButton";
import CtaTransparentButton from "../CtaTransparentButton/CtaTransparentButton";
import { IconContext, IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiJest,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiVercel,
  SiPython,
  SiScikitlearn,
  SiPandas,
  SiTensorflow
} from "react-icons/si";

interface Skill {
  name: string;
  icon: IconType;
  category: "frontend" | "backend" | "dataScience";
}


const AboutMe: React.FC = () => {

  const techSkills = useMemo<Skill[]>(() => [
    // Frontend
    { name: "Next.js", icon: SiNextdotjs, category: "frontend" },
    { name: "React", icon: SiReact, category: "frontend" },
    { name: "TailwindCSS", icon: SiTailwindcss, category: "frontend" },
    { name: "Shadcn", icon: SiShadcnui, category: "frontend" },
    // Backend
    { name: "Node.js", icon: SiNodedotjs, category: "backend" },
    { name: "Express.js", icon: SiExpress, category: "backend" },
    { name: "NestJS", icon: SiNestjs, category: "backend" },
    { name: "PostgreSQL", icon: SiPostgresql, category: "backend" },
    { name: "MongoDB", icon: SiMongodb, category: "backend" },
    { name: "Supabase", icon: SiSupabase, category: "backend" },
    { name: "Vercel", icon: SiVercel, category: "backend" },
    { name: "Jest", icon: SiJest, category: "backend"},
    // Data Science
    { name: "Python", icon: SiPython, category: "dataScience" },
    { name: "Pandas", icon: SiPandas, category: "dataScience" },
    { name: "Scikit-learn", icon: SiScikitlearn, category: "dataScience" },
    { name: "Tensorflow", icon: SiTensorflow, category: "dataScience" },
  ], []);

  return (
    <section id="about-me" className={styles.aboutMeSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>

        {/* Professional Summary */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Professional Summary</h3>
          <p className={styles.text}>
            I am a third-year <strong>Electrical and Computer Engineering</strong> undergraduate at UFRJ, passionate about bridging the gap between software and hardware through innovative solutions. My academic path and professional experiences have strengthened my skills in <strong>backend development</strong>,{" "} <strong>machine learning</strong>, and <strong>data analysis</strong>.
          </p>
          <p className={styles.text}>
            I have worked as a <strong>Backend Developer</strong> at <strong>Fluxo Consultoria</strong> (Fluxo Consultancy) - an engineering undergratuate business -, where I built and maintained APIs using <strong>NestJS</strong> and <strong>PostgreSQL</strong>, applying clean architecture principles and best practices in software engineering. Additionally, as a <strong>Machine Learning Researcher</strong> at GTA-UFRJ (Grupo de Teleinformática e Automação - Teleinformatics and Automation Group), I explored data-driven solutions using <strong>Scikit-Learn</strong>,{" "} <strong>Pandas</strong>, and <strong>Matplotlib</strong>, while leveraging high-performance computing with TPUs.
          </p>
          <p className={styles.text}>
            I thrive on hands-on learning, tackling complex problems, and applying emerging technologies. My goal is to contribute to impactful projects that push the boundaries of software engineering and data science, while continuing to grow as a technology professional.
          </p>
        </div>

        {/* My Tech Stack */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>My Tech Stack</h3>

          <IconContext.Provider
            value={{className: styles.skillIcon}}
          >
            <div className={styles.skillsGrid}>
              {techSkills.map((skill) => {
                const IconComponent = skill.icon as IconType;

                return (
                  <div
                    key={skill.name}
                    className={`${styles.skillItem} ${styles[skill.category]}`}
                  >
                    <IconComponent />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </IconContext.Provider>
        </div>

        {/* Experience/Work History */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Experience</h3>
          <div className={styles.experienceItem}>
            <h4 className={styles.experienceRole}>
              Software Engineer Intern at Fluxo Consultoria
            </h4>
            <p className={styles.experienceDuration}>Jun 2023 – Jan 2024</p>
            <ul className={styles.experienceResponsibilities}>
              <li>Developed and maintained back-end applications.</li>
              <li>Designed scalable systems, databases and APIs.</li>
              <li>
                Implemented RESTful APIs and integrated with various third-party
                services.
              </li>
            </ul>
          </div>
          <div className={styles.experienceItem}>
            <h4 className={styles.experienceRole}>
              Machine Learning Researcher at GTA-UFRJ
            </h4>
            <p className={styles.experienceDuration}>Jun 2024 – Jan 2025</p>
            <ul className={styles.experienceResponsibilities}>
              <li>Developed a computer vision model.</li>
              <li>Designed a customized dataset for training the model.</li>
              <li>Implemented the model to a django back-end.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Education</h3>
          <div className={styles.educationItem}>
            <h4 className={styles.educationDegree}>
              Bachelor of Electrical & Computer Engineering (GPA 3.3 - 8.2/10)
            </h4>
            <p className={styles.educationInstitution}>
              Federal University of Rio de Janeiro (UFRJ), Rio de Janeiro, RJ,
              Brazil
            </p>
            <p className={styles.educationYear}>Graduation: 2027</p>
          </div>
        </div>

        {/* Certifications/Awards */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Certifications & Awards</h3>
          <ul className={styles.certificationsList}>
            <li>ChatGPT Mastery - Adapta org. (2024)</li>
          </ul>
        </div>

        {/* Personal Statement/Interests (Optional) */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Interests</h3>
          <p className={styles.text}>
I am deeply interested in technologies that connect theory with real-world impact. My curiosity drives me to explore areas such as <strong>backend development</strong>,{" "} <strong>distributed systems</strong>, and <strong>scalable API design</strong>, where I can apply engineering principles to build robust and efficient solutions.
          </p>
          <p className={styles.text}>
On the research side, I am fascinated by machine learning algorithms and their applications in <strong>data-driven decision-making</strong>. I enjoy experimenting with models, optimizing their performance, and understanding how emerging technologies can transform industries.
          </p>
          <p className={styles.text}>
Beyond software, I value the synergy between hardware and software, a perspective rooted in my Electronic and Computer Engineering background. This motivates me to stay up-to-date with advancements in <strong>computing architectures</strong> and <strong>embedded systems</strong>.
          </p>
          <p className={styles.text}>
Above all, I am passionate about <strong>continuous learning</strong>—whether it's mastering a new framework, contributing to open-source projects, or diving deep into the latest tech trends. My goal is to keep expanding my knowledge while building solutions that make a difference.
          </p>
        </div>

        {/* Call to Action */}
        <div className={styles.callToAction}>
          <p className={styles.text}>
            Interested in my work or want to collaborate?
          </p>
          <a href="https://github.com/Cerne17" target="_blank" rel="noopener noreferrer">
            <CtaBlueButton title="My Projects"/>
          </a>
          <a href="https://calendly.com/miguelcerne-dev/30min" target="_blank" rel="noopener noreferrer">
            <CtaTransparentButton title="Book a Call"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
