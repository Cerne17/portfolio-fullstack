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
            I am a passionate Full Stack Developer with X years of experience in
            building robust and scalable web applications. My expertise lies in
            modern JavaScript frameworks like React, coupled with strong backend
            skills in Node.js and Express.js, and database management using
            MongoDB. I am constantly seeking to learn new technologies and solve
            complex problems, striving to create efficient and user-friendly
            solutions.
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
