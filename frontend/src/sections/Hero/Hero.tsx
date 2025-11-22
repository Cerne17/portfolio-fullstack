import React from "react";
import styles from "./Hero.module.css";
import CtaTransparentButton from "../../components/CtaTransparentButton/CtaTransparentButton";
import CtaBlueButton from "../../components/CtaBlueButton/CtaBlueButton";
import "../../styles/globals.css";
import "../../styles/globals.css";

import { useLanguage } from "../../context/LanguageContext";

const Hero: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{translations.hero.title}</h1>
        <h2 className={styles.heroSubtitle}>{translations.hero.subtitle}</h2>
        <p className={styles.text}>{translations.hero.intro}</p>
        <div className={styles.btnContainer}>
          <CtaBlueButton
            title={translations.hero.ctaProjects}
            link="https://github.com/Cerne17"
            isDark={true}
          />
          <CtaTransparentButton
            title={translations.hero.ctaCall}
            link="https://calendly.com/miguelcerne-dev/30min"
            isDark={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
