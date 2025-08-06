import React from "react";
import styles from "./CtaTransparentButton.module.css";

interface CtaTransparentButtonProps {
  title?: string;
  link: string;
}

const CtaTransparentButton: React.FC<CtaTransparentButtonProps> = ({
  title = "Click Me!",
  link,
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className={styles.CtaTransparentButton}>{title}</button>
    </a>
  );
};

export default CtaTransparentButton;
