import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactMe.module.css";
import "../../styles/globals.css";

import { useLanguage } from "../../context/LanguageContext";

const ContactForm: React.FC = () => {
  const { translations } = useLanguage();
  const [state, handleSubmit] = useForm(
    process.env.REACT_APP_FORMSPREE_FORM_ID!
  );

  if (state.succeeded) {
    return (
      <p className={styles.successMessage}>
        {translations.contact.successMessage}
      </p>
    );
  }

  return (
    <section id="contact-me" className={styles.contactSection}>
      <h2 className={`sectionTitle`}>{translations.contact.title}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">{translations.contact.nameLabel}</label>
        <input id="name" type="text" name="name" required />

        <label htmlFor="email">{translations.contact.emailLabel}</label>
        <input id="email" type="email" name="email" required />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className={styles.validationError}
        />

        <label htmlFor="message">{translations.contact.messageLabel}</label>
        <textarea id="message" name="message" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className={styles.validationError}
        />

        <button type="submit" disabled={state.submitting} className={styles.submitButton}>
          {state.submitting ? translations.contact.sending : translations.contact.submitButton}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;