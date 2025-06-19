import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <h3 className={styles.subsectionTitle}>Who's Miguel Cerne?</h3>
    </section>
  );
};

export default Hero;
