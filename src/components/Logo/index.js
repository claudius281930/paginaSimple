import React from 'react';
import styles from "./Logo.module.css";

function Logo() {
  return (
    <section className={styles.logoContainer}>
        <img
        src="/img/vaidosa.png"
        alt="ciclio"
        className={styles.logo_image}
      />
    </section>
  );
}

export default Logo;
