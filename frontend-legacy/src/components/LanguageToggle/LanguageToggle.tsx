import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./LanguageToggle.module.css";

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      className={styles.languageToggle}
      onClick={() => setLanguage(language === "en" ? "pt" : "en")}
      aria-label={`Switch to ${language === "en" ? "Portuguese" : "English"}`}
    >
      {language === "en" ? "PT" : "EN"}
    </button>
  );
};

export default LanguageToggle;
