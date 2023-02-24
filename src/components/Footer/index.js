import React from 'react';
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

function Footer() {
  return (

    <nav className={styles.containerFooter}>
      <ul className={styles.contanierFooter_socialMidia}>

        <li className="containerList_itens">
          <Link to="/instagram"
            class="containerList_link">
            Instagram
          </Link>
        </li>

        <li className="containerList_itens">
          <Link to="/facebook"
            class="containerList_link">
            Facebook
          </Link>
        </li>

        <li className="containerList_itens">
          <Link to="/whatsapp"
            class="containerList_link">
            Whatsapp
          </Link>

        </li>
      </ul>
    </nav>

  );
}
export default Footer;
