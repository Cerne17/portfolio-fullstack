import React from "react";
import styles from "./AboutMe.module.css";
import CtaBlueButton from "../../components/CtaBlueButton/CtaBlueButton";
import CtaTransparentButton from "../../components/CtaTransparentButton/CtaTransparentButton";
import "../../styles/globals.css";

// Sub-components
import ProfessionalSummary from "./components/ProfessionalSummary";
import TechStack from "./components/TechStack";
import ExperienceList from "./components/ExperienceList";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Interests from "./components/Interests";

import { useLanguage } from "../../context/LanguageContext";

const AboutMe: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section id="about-me" className={styles.aboutMeSection}>
      <div className={styles.container}>
        <h2 className={`sectionTitle`}>{translations.aboutMe.title}</h2>

        <ProfessionalSummary />
        <TechStack />
        <ExperienceList />
        <Education />
        <Certifications />
        <Interests />

        {/* Call to Action */}
        <div className={styles.callToAction}>
          <p className={`text center`}>
            {translations.aboutMe.ctaText}
          </p>
          <CtaBlueButton title={translations.aboutMe.ctaProjects} link="https://github.com/Cerne17" />
          <CtaTransparentButton
            title={translations.aboutMe.ctaCall}
            link="https://calendly.com/miguelcerne-dev/30min"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
