import React from "react";
import styles from "./CtaBlueButton.module.css";

interface CtaBlueButtonProps {
  title?: string;
}

const CtaBlueButton: React.FC<CtaBlueButtonProps> = ({ title = "Click Me!"}) => {
  return <button className={styles.CtaBlueButton}>{title}</button>;
};

export default CtaBlueButton;
