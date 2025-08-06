import React from "react";
import { IconContext } from "react-icons";
import type { skillPill } from "../../interfaces/skillPill.interface";
import styles from "./SkillPill.module.css";

const SkillPill: React.FC<skillPill> = ({ icon: Icon, title, stack }) => {
  const IconComponent = Icon as unknown as React.FC;

  return (
    <IconContext.Provider value={{ className: styles.skillIcon }}>
      <div className={`${styles.skillPill} ${styles[stack]}`}>
        <IconComponent />
        <span>{title}</span>
      </div>
    </IconContext.Provider>
  );
};

export default SkillPill;
