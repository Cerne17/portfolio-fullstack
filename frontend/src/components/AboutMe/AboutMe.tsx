import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe: React.FC = () => {
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
          <div className={styles.skillsGrid}>
            <span className={styles.skillTag}>React</span>
            <span className={styles.skillTag}>TailwindCSS</span>
            <span className={styles.skillTag}>Node.js</span>
            <span className={styles.skillTag}>Express.js</span>
            <span className={styles.skillTag}>NestJS</span>
            <span className={styles.skillTag}>Relational Databases</span>
            <span className={styles.skillTag}>MongoDB</span>
            {/* Add more skills as needed */}
          </div>
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
              Bachelor of Electrical & Computer Engineering (GPA 3.2)
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
            Alongside coding, I'm also a complete nerd when it comes to
            mathematics and video game.
          </p>
        </div>

        {/* Call to Action */}
        <div className={styles.callToAction}>
          <p className={styles.text}>
            Interested in my work or want to collaborate?
          </p>
          <button
            className={styles.actionButton}
            onClick={() => console.log("Navigate to Projects")}
          >
            View My Projects
          </button>
          <button
            className={styles.actionButton}
            onClick={() => console.log("Contact")}
          >
            Contact Me!
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
