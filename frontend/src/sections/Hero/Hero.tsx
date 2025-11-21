import React from "react";
import styles from "./Hero.module.css";
import CtaTransparentButton from "../../components/CtaTransparentButton/CtaTransparentButton";
import CtaBlueButton from "../../components/CtaBlueButton/CtaBlueButton";
import "../../styles/globals.css";
import profile from "../../data/profile";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{profile.name}</h1>
        <h2 className={styles.heroSubtitle}>{profile.role}</h2>
        <p className={styles.text}>{profile.intro}</p>
        <div className={styles.btnContainer}>
          <CtaBlueButton
            title="My Projects"
            link="https://github.com/Cerne17"
            isDark={true}
          />
          <CtaTransparentButton
            title="Book a Call"
            link="https://calendly.com/miguelcerne-dev/30min"
            isDark={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
