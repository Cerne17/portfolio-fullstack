import React from "react";
import styles from "./CtaBlueButton.module.css";

interface CtaBlueButtonProps {
  title?: string;
  link: string;
  className?: string;
}

const CtaBlueButton: React.FC<CtaBlueButtonProps> = ({ title = "Click Me!", link, className }) => {
  const buttonClassName = `${styles.CtaBlueButton} ${className || ''}`.trim();

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className={buttonClassName}>{title}</button>
    </a>
  );
};

export default CtaBlueButton;