import React from "react";
import styles from "./CtaBlueButton.module.css";

interface CtaBlueButtonProps {
  title?: string;
  link: string;
}

const CtaBlueButton: React.FC<CtaBlueButtonProps> = ({
  title = "Click Me!",
  link,
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className={styles.CtaBlueButton}>{title}</button>
    </a>
  );
};

export default CtaBlueButton;
