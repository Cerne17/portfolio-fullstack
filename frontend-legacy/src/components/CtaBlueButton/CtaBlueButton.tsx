import React from "react";
import styles from "./CtaBlueButton.module.css";

interface CtaBlueButtonProps {
  title?: string;
  link: string;
  isDark?: boolean;
}

const CtaBlueButton: React.FC<CtaBlueButtonProps> = ({ title = "Click Me!", link, isDark }) => {
  const buttonClassName = `${styles.CtaBlueButton} ${isDark ? styles.dark : ''}`.trim();

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className={buttonClassName}>{title}</button>
    </a>
  );
};

export default CtaBlueButton;