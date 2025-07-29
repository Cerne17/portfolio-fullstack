import React from "react";
import styles from "./CtaTransparentButton.module.css";

interface CtaTransparentButtonProps {
  title?: string;
}

const CtaTransparentButton: React.FC<CtaTransparentButtonProps> = ({ title = "Click Me!"}) => {
  return <button className={styles.CtaTransparentButton}>{title}</button>;
};

export default CtaTransparentButton;
