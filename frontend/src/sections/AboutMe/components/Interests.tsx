import React from "react";
import styles from "../AboutMe.module.css";
import profile from "../../../data/profile";

const Interests: React.FC = () => {
  return (
    <div className={styles.subsection}>
      <h3 className={`subsectionTitle`}>Interests</h3>
      {profile.interests.map((paragraph, index) => (
        <p
          key={index}
          className={`text`}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  );
};

export default Interests;
