import React from "react";
import styles from "./Hero.module.css";
import CtaTransparentButton from "../CtaTransparentButton/CtaTransparentButton";
import CtaBlueButton from "../CtaBlueButton/CtaBlueButton";

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <h3 className={styles.subsectionTitle}>Who's Miguel Cerne?</h3>
      <div className={styles.heroContainer}>
        <div className={styles.leftHeroContainer}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            minus nihil nesciunt animi veritatis officia commodi illo! Numquam
            voluptate consequuntur expedita, quisquam esse recusandae molestiae
            facilis corporis aut sit repellat exercitationem magni ipsam
            aspernatur nemo animi culpa ducimus fugit eligendi quae aperiam in.
            Exercitationem corrupti minus, nesciunt error nostrum laudantium!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            dolorum explicabo optio aspernatur ad quisquam maiores! Excepturi a
            hic dicta! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Iusto, eos.
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
