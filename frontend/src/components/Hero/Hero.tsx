import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <h3 className={styles.subsectionTitle}>Who's Miguel Cerne?</h3>
      <div className={styles.container}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          minus nihil nesciunt animi veritatis officia commodi illo! Numquam
          voluptate consequuntur expedita, quisquam esse recusandae molestiae
          facilis corporis aut sit repellat exercitationem magni ipsam
          aspernatur nemo animi culpa ducimus fugit eligendi quae aperiam in.
          Exercitationem corrupti minus, nesciunt error nostrum laudantium!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum
          explicabo optio aspernatur ad quisquam maiores! Excepturi a hic dicta!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, eos.
        </p>
        {/* Banner Placeholder */}
        <div className={styles.bannerPlaceholder}></div>
      </div>
    </section>
  );
};

export default Hero;
