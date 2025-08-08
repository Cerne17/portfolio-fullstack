import React from "react";
import styles from "./AboutMe.module.css";
import CtaBlueButton from "../../components/CtaBlueButton/CtaBlueButton";
import CtaTransparentButton from "../../components/CtaTransparentButton/CtaTransparentButton";
import SkillPill from "../../components/SkillPill/SkillPill";
import experiences from "../../data/experiences.json";
import { frontendSkills, backendSkills, datascienceSkills } from "../../data/skills";
import "../../styles/globals.css";
import * as SiIcons from "react-icons/si";
import { IconType } from "react-icons";

const getIcon = (iconName: string): IconType => {
  type IconName = keyof typeof SiIcons;
  const icon = SiIcons[iconName as IconName];
  return icon;
};

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className={styles.aboutMeSection}>
      <div className={styles.container}>
        <h2 className={`sectionTitle`}>About Me</h2>

        {/* Professional Summary */}
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

        {/* My Tech Stack */}
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

        {/* Experience/Work History */}
        <div className={styles.subsection}>
          <h3 className={`subsectionTitle`}>Experiences</h3>
          {experiences.map((experience) => {
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
                    <h5 className={`subsubsectionTitle`}>Highlights</h5>
                    <ul className={styles.experienceHighlights}>
                      {experience.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className={`subsubsectionTitle`}>Impact</h5>
                    <ul className={styles.experienceImpact}>
                      {experience.impact.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className={`subsubsectionTitle`}>Technologies Used</h5>
                    <div className={styles.experienceTechStack}>
                      {experience.tech.map((tech) => (
                        <SkillPill
                          key={tech.id}
                          id={tech.id}
                          icon={getIcon(tech.icon)}
                          title={tech.title}
                          stack={tech.stack as "frontend" | "backend" | "datascience"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Education */}
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

        {/* Certifications/Awards */}
        <div className={styles.subsection}>
          <h3 className={`subsectionTitle`}>Certifications & Awards</h3>
          <ul className={styles.certificationsList}>
            <li>ChatGPT Mastery - Adapta org. (2024)</li>
          </ul>
        </div>

        {/* Personal Statement/Interests (Optional) */}
        <div className={styles.subsection}>
          <h3 className={`subsectionTitle`}>Interests</h3>
          <p className={`text`}>
            I am deeply interested in technologies that connect theory with
            real-world impact. My curiosity drives me to explore areas such as{" "}
            <strong>backend development</strong>,{" "}
            <strong>distributed systems</strong>, and{" "}
            <strong>scalable API design</strong>, where I can apply engineering
            principles to build robust and efficient solutions.
          </p>
          <p className={`text`}>
            On the research side, I am fascinated by machine learning algorithms
            and their applications in{" "}
            <strong>data-driven decision-making</strong>. I enjoy experimenting
            with models, optimizing their performance, and understanding how
            emerging technologies can transform industries.
          </p>
          <p className={`text`}>
            Beyond software, I value the synergy between hardware and software,
            a perspective rooted in my Electronic and Computer Engineering
            background. This motivates me to stay up-to-date with advancements
            in <strong>computing architectures</strong> and{" "}
            <strong>embedded systems</strong>.
          </p>
          <p className={`text`}>
            Above all, I am passionate about{" "}
            <strong>continuous learning</strong>—whether it's mastering a new
            framework, contributing to open-source projects, or diving deep into
            the latest tech trends. My goal is to keep expanding my knowledge
            while building solutions that make a difference.
          </p>
        </div>

        {/* Call to Action */}
        <div className={styles.callToAction}>
          <p className={`text center`}>
            Interested in my work or want to collaborate?
          </p>
          <CtaBlueButton title="My Projects" link="https://github.com/Cerne17" />
          <CtaTransparentButton
            title="Book a Call"
            link="https://calendly.com/miguelcerne-dev/30min"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
