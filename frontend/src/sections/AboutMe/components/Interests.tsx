import React from "react";
import styles from "../AboutMe.module.css";

const Interests: React.FC = () => {
  return (
    <div className={styles.subsection}>
      <h3 className={`subsectionTitle`}>Interests</h3>
      <p className={`text`}>
        I am deeply interested in technologies that connect theory with
        real-world impact. My curiosity drives me to explore areas such as{" "}
        <strong>backend development</strong>,{" "}
        <strong>distributed systems</strong>, and{" "}
        <strong>scalable API design</strong>, where I can apply engineering
        principles to build robust and efficient solutions.
      </p>
      <p className={`text`}>
        On the research side, I am fascinated by machine learning algorithms
        and their applications in{" "}
        <strong>data-driven decision-making</strong>. I enjoy experimenting
        with models, optimizing their performance, and understanding how
        emerging technologies can transform industries.
      </p>
      <p className={`text`}>
        Beyond software, I value the synergy between hardware and software,
        a perspective rooted in my Electronic and Computer Engineering
        background. This motivates me to stay up-to-date with advancements
        in <strong>computing architectures</strong> and{" "}
        <strong>embedded systems</strong>.
      </p>
      <p className={`text`}>
        Above all, I am passionate about{" "}
        <strong>continuous learning</strong>—whether it's mastering a new
        framework, contributing to open-source projects, or diving deep into
        the latest tech trends. My goal is to keep expanding my knowledge
        while building solutions that make a difference.
      </p>
    </div>
  );
};

export default Interests;
