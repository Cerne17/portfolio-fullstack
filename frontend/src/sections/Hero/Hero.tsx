import React from "react";
import styles from "./Hero.module.css";
import CtaTransparentButton from "../../components/CtaTransparentButton/CtaTransparentButton";
import CtaBlueButton from "../../components/CtaBlueButton/CtaBlueButton";
import "../../styles/globals.css";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={`sectionTitle ${styles.heroTitle}`}>Miguel Cerne</h1>
        <h2 className={`subsectionTitle ${styles.heroSubtitle}`}>
          Full-Stack Engineer & Machine Learning Researcher
        </h2>
        <p className={styles.text}>
          I am a Brazilian Full-Stack Engineer and a third-year Electrical and
          Computer Engineering undergraduate at the Federal University of Rio
          de Janeiro (UFRJ). My passion is to build entire systems from the
          ground up, blending my lifelong love for math and logic with pure
          creativity.
        </p>
        <div className={styles.btnContainer}>
          <CtaBlueButton
            title="My Projects"
            link="https://github.com/Cerne17"
            className={styles.heroCtaBlueButton}
          />
          <CtaTransparentButton
            title="Book a Call"
            link="https://calendly.com/miguelcerne-dev/30min"
            className={styles.heroCtaTransparentButton}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
