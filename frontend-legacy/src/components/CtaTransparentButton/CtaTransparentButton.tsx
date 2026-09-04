import React from "react";
import styles from "./CtaTransparentButton.module.css";

interface CtaTransparentButtonProps {
  title?: string;
  link: string;
  isDark?: boolean;
}

const CtaTransparentButton: React.FC<CtaTransparentButtonProps> = ({ title = "Click Me!", link, isDark }) => {
  const buttonClassName = `${styles.CtaTransparentButton} ${isDark ? styles.dark : ''}`.trim();

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className={buttonClassName}>{title}</button>
    </a>
  );
};

export default CtaTransparentButton;