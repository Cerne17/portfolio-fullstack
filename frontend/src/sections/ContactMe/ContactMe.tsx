import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactMe.module.css";
import "../../styles/globals.css";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm(
    process.env.REACT_APP_FORMSPREE_FORM_ID!
  );

  if (state.succeeded) {
    return (
      <p className={styles.successMessage}>
        Thanks for your message! I'll get back to you soon.
      </p>
    );
  }

  return (
    <section id="contact-me" className={styles.contactSection}>
      <h2 className={`sectionTitle`}>Contact Me</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" required />

        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className={styles.validationError}
        />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className={styles.validationError}
        />

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
