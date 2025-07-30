import React from "react";
import styles from "./Hero.module.css";
import CtaTransparentButton from "../CtaTransparentButton/CtaTransparentButton";
import CtaBlueButton from "../CtaBlueButton/CtaBlueButton";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <h3 className={styles.subsectionTitle}>Who's Miguel Cerne?</h3>
      <div className={styles.heroContainer}>
        <div className={styles.leftHeroContainer}>
          <p className={styles.text}>
            I am a Brazilian Full-Stack Engineer and a third-year Electrical and Computer Engineering undergraduate at the Federal University of Rio de Janeiro (UFRJ). 
            While my engineering studies provided a rigorous foundation, my journey into software was truly sparked by discovering Conway's Game of Life.
            The realization that I could build entire systems from the ground up, blending my lifelong love for math and logic with pure creativity, ignited a passion that drives me to this day.
          </p>
          <p className={styles.text}>
            This passion has led me to explore and deliver projects across multiple domains, from Web Development to Data Science and Machine Learning.
            What I love most is the multi-disciplinarity of it all—seeing how a few simple concepts can emerge and combine to build complex solutions that solve real problems for real people.
            Ultimately, that is my goal: to use technology to make a tangible, positive impact.
          </p>
        </div>
        {/* Banner Placeholder */}
        <div className={styles.bannerPlaceholder}></div>
      </div>
      <div className={styles.btnContainer}>
        <a href="https://github.com/Cerne17" target="_blank" rel="noopener noreferrer">
          <CtaBlueButton title="My Projects"/>
        </a>
        <a href="https://calendly.com/miguelcerne-dev/30min" target="_blank" rel="noopener noreferrer">
          <CtaTransparentButton title="Book a Call"/>
        </a>
      </div>
    </section>
  );
};

export default Hero;
