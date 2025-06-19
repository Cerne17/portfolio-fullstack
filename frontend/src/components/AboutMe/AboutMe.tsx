import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe: React.FC = () => {
  return (
    <section className={styles.aboutMeSection}>
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
              Software Engineer at [Company Name]
            </h4>
            <p className={styles.experienceDuration}>Jan 2022 – Present</p>
            <ul className={styles.experienceResponsibilities}>
              <li>Developed and maintained full-stack applications.</li>
              <li>
                Collaborated with cross-functional teams to define, design, and
                ship new features.
              </li>
              <li>
                Implemented RESTful APIs and integrated with various third-party
                services.
              </li>
            </ul>
          </div>
          <div className={styles.experienceItem}>
            <h4 className={styles.experienceRole}>
              Junior Developer at [Previous Company]
            </h4>
            <p className={styles.experienceDuration}>Jun 2020 – Dec 2021</p>
            <ul className={styles.experienceResponsibilities}>
              <li>
                Assisted in the development of client-side logic using React.
              </li>
              <li>Participated in code reviews and learned best practices.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Education</h3>
          <div className={styles.educationItem}>
            <h4 className={styles.educationDegree}>
              Bachelor of Science in Computer Science
            </h4>
            <p className={styles.educationInstitution}>
              [University Name], [City, State]
            </p>
            <p className={styles.educationYear}>Graduated: [Year]</p>
          </div>
        </div>

        {/* Certifications/Awards */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Certifications & Awards</h3>
          <ul className={styles.certificationsList}>
            <li>[Certification Name] - [Issuing Body] ([Year])</li>
            <li>[Award Name] ([Year])</li>
          </ul>
        </div>

        {/* Personal Statement/Interests (Optional) */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Interests</h3>
          <p className={styles.text}>
            Outside of coding, I enjoy [Your hobbies, e.g., hiking, photography,
            playing guitar]. I believe in continuous learning and actively
            contribute to the developer community.
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
