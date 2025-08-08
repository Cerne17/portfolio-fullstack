import React from "react";
import styles from "./CtaTransparentButton.module.css";

interface CtaTransparentButtonProps {
  title?: string;
  link: string;
  className?: string;
}

const CtaTransparentButton: React.FC<CtaTransparentButtonProps> = ({ title = "Click Me!", link, className }) => {
  const buttonClassName = `${styles.CtaTransparentButton} ${className || ''}`.trim();

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className={buttonClassName}>{title}</button>
    </a>
  );
};

export default CtaTransparentButton;